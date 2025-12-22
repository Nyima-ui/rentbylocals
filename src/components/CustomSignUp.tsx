"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { EmailCodeFactor } from "@clerk/types";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

interface CustomSignUpProps {
  setisSignUpDialogOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isSignUpDialogOpened: boolean;
}

const CustomSignUp = ({
  isSignUpDialogOpened,
  setisSignUpDialogOpened,
}: CustomSignUpProps) => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();
  const signUpDialogRef = useRef<HTMLDivElement | null>(null);
  const [verifying, setVerifying] = useState<boolean>(false);
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [authMode, setAuthMode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // Close the sign up dialog
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

  //Handle Email form submission
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!isLoaded) return;

    try {
      // start auth with sign up flow
      await signUp?.create({ emailAddress, password });
      await signUp?.prepareEmailAddressVerification({ strategy: "email_code" });

      setAuthMode("sign-up");
      setVerifying(true);
    } catch (err: unknown) {
      if (isClerkAPIResponseError(err)) {
        const userExists = err.errors?.some(
          (e) => e.code === "form_identifier_exists"
        );
        // if user exists, trigger sign in flow
        if (userExists) {
          try {
            const signInAttempt = await signIn?.create({
              identifier: emailAddress,
              password,
            });

            if (signInAttempt?.status === "complete") {
              await setActive({
                session: signInAttempt.createdSessionId,
              });
              router.push("/");
              setisSignUpDialogOpened(false);
            } else if (signInAttempt?.status === "needs_second_factor") {
              const emailCodeFactor =
                signInAttempt.supportedSecondFactors?.find(
                  (factor): factor is EmailCodeFactor =>
                    factor.strategy === "email_code"
                );

              if (emailCodeFactor) {
                await signIn?.prepareSecondFactor({
                  strategy: "email_code",
                  emailAddressId: emailCodeFactor.emailAddressId,
                });
              }
            }
            setAuthMode("sign-in");
            setVerifying(true);
          } catch (err) {
            console.error(`Sign in error 😩: ${JSON.stringify(err, null, 2)}`);
          }
        } else {
          console.error(`Sign up error 😩: ${JSON.stringify(err, null, 2)}`);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      if (authMode === "sign-up") {
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code,
        });
        if (completeSignUp.status === "complete") {
          await setActive({ session: completeSignUp.createdSessionId });
          setisSignUpDialogOpened(false);
          router.push("/");
        } else {
          // TODO: what happens if the user enters wrong code?
        }
      } else if (authMode === "sign-in") {
        const signInAttempt = await signIn?.attemptSecondFactor({
          strategy: "email_code",
          code,
        });
        if (signInAttempt?.status === "complete") {
          await setActive({
            session: signInAttempt.createdSessionId,
          });
          router.push("/");
        } else {
          console.error(JSON.stringify(signInAttempt, null, 2));
        }
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  //sign up or in with OAuth
  const signUpWithOAuth = (strategy: "oauth_google" | "oauth_apple") => {
    return signIn?.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
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
        {!verifying ? (
          <>
            <h5 className="text-lg">Log in or sign up</h5>
            <div className="w-full space-y-5 mt-5">
              <button
                className="py-3 border flex bg-white/95 text-main-blue rounded-sm w-full items-center justify-center gap-3 cursor-pointer group"
                onClick={() => signUpWithOAuth("oauth_google")}
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
                onClick={() => signUpWithOAuth("oauth_apple")}
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
                id="email"
                type="email"
                name="email"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full bg-white rounded-sm placeholder:text-gray-text py-2.5 pl-[5px] text-main-blue focus:outline-blue-600"
                placeholder="Sign in with Email"
              />
              <div id="clerk-captcha"></div>
              <input
                id="password"
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white rounded-sm placeholder:text-gray-text py-2.5 pl-[5px] text-main-blue focus:outline-blue-600 mt-2.5 custom-text-security"
                placeholder="Enter password"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="py-2.5 bg-accent-blue w-full rounded-sm mt-5.5 cursor-pointer hover:bg-hover-blue disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex justify-center gap-2.5 items-center">
                    <span>Processing</span>
                    {/* spinner */}
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-neutral-tertiary animate-spin fill-main-blue"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  `Continue`
                )}
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
              We sent a code to <span>{emailAddress}</span>
            </p>
            <input
              id="code"
              type="text"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              maxLength={6}
              className="w-full bg-white rounded-sm placeholder:text-gray-text py-2.5 pl-[5px] text-main-blue focus:outline-blue-600 mt-3"
              placeholder="Enter 6-digit code"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="py-2.5 bg-accent-blue w-full rounded-sm mt-5.5 cursor-pointer hover:bg-hover-blue"
            >
              {isLoading ? (
                <div className="flex justify-center gap-2.5 items-center">
                  <span>Processing</span>
                  {/* spinner */}
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-neutral-tertiary animate-spin fill-main-blue"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                `Continue`
              )}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setVerifying(false);
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
