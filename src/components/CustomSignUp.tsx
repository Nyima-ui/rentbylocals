"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useClerk, useSignIn, useSignUp } from "@clerk/nextjs";

interface CustomSignUpProps {
  setisSignUpDialogOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isSignUpDialogOpened: boolean;
}

const CustomSignUp = ({
  isSignUpDialogOpened,
  setisSignUpDialogOpened,
}: CustomSignUpProps) => {
  const signUpDialogRef = useRef<HTMLDivElement | null>(null);

  const [emailVerifying, setEmailVerifying] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const { signIn } = useSignIn();
  const { signUp } = useSignUp();
  const { setActive } = useClerk();

  useEffect(() => {
    console.log(emailVerifying);
  }, [emailVerifying]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setisSignUpDialogOpened(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSignUpDialogOpened, setisSignUpDialogOpened]);

  const handleGoogleSignIn = () => {
    if (!signIn) return;

    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  const handleAppleSignIn = () => {
    if (!signIn) return;

    signIn.authenticateWithRedirect({
      strategy: "oauth_apple",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signIn) return;

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (!email) return;
    setEmail(email);

    try {
      await signUp?.create({ emailAddress: email });
      await signUp?.prepareEmailAddressVerification({ strategy: "email_code" });
      setEmailVerifying(true);
    } catch (err) {
      console.error("Error signing up: ", err);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signUp) return;

    const formData = new FormData(e.currentTarget);
    const code = formData.get("code") as string;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code
      });
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        setisSignUpDialogOpened(false);
      }
    } catch (err) {
      console.error("Verification failed: ", err);
    }
  };

  return (
    <div
      className="bg-black/70 text-white fixed inset-0 z-20 flex items-center justify-center"
      onClick={() => setisSignUpDialogOpened(false)}
    >
      <div
        ref={signUpDialogRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-main-blue rounded-sm 
      py-7.5 px-5 flex flex-col items-center text-base relative min-w-[360px] md:min-w-[380px] -translate-y-10"
      >
        {!emailVerifying ? (
          <>
            <h5 className="text-lg">Log in or sign up</h5>
            <div className="w-full space-y-5 mt-5">
              <button
                className="py-3 border flex bg-white/95 text-main-blue rounded-sm w-full items-center justify-center gap-3 cursor-pointer group"
                onClick={handleGoogleSignIn}
              >
                <Image
                  width={24}
                  height={24}
                  src={"/svg/google.svg"}
                  alt="Google logo"
                />
                <p className="group-hover:underline">Sign in with Google</p>
              </button>
              <button
                className="py-3 border flex bg-white/95 text-main-blue rounded-sm w-full items-center justify-center gap-3 cursor-pointer group"
                onClick={handleAppleSignIn}
              >
                <Image
                  width={24}
                  height={24}
                  src={"/svg/apple.svg"}
                  alt="Apple icon"
                />
                <p className="group-hover:underline">Continue with Apple</p>
              </button>
            </div>
            <div className="flex items-center w-full gap-2 mt-5">
              <span className="w-full h-[1.5px] rounded-sm bg-gray-300"></span>
              <span>OR</span>
              <span className="w-full h-[1.5px] rounded-sm bg-gray-300"></span>
            </div>
            <form className="mt-5 w-full" onSubmit={handleEmailSignIn}>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white rounded-sm placeholder:text-gray-text py-2.5 pl-[5px] text-main-blue focus:outline-blue-600"
                placeholder="Sign in with Email"
              />
              <div id="clerk-captcha"></div>
              <button
                type="submit"
                className="py-2.5 bg-accent-blue w-full rounded-sm mt-5.5 cursor-pointer hover:bg-hover-blue"
              >
                Continue
              </button>
            </form>
            <button
              onClick={() => setisSignUpDialogOpened(false)}
              className="absolute top-8 right-5 rounded-sm hover:bg-gray-400/30"
            >
              <Image
                width={24}
                height={24}
                src={"/svg/X.svg"}
                alt="Close dialog icon"
              />
            </button>
          </>
        ) : (
          <form className="mt-5 w-full" onSubmit={handleVerifyCode}>
            <p className="text-sm mt-2">
              We sent a code to <span>{email}</span>
            </p>
            <input
              type="text"
              name="code"
              required
              maxLength={6}
              className="w-full bg-white rounded-sm placeholder:text-gray-text py-2.5 pl-[5px] text-main-blue focus:outline-blue-600"
              placeholder="Enter 6-digit code"
            />
            <button
              type="submit"
              className="py-2.5 bg-accent-blue w-full rounded-sm mt-5.5 cursor-pointer hover:bg-hover-blue"
            >
              Verify Account
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setEmailVerifying(false);
              }}
              className="py-2.5 bg-accent-blue w-full rounded-sm mt-3 cursor-pointer hover:bg-hover-blue"
            >
              Back to sign up
            </button>
          </form>
        )}
        <></>
      </div>
    </div>
  );
};

export default CustomSignUp;
