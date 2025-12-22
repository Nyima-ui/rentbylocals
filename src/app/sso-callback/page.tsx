import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-main-blue text-white">
      {/* Your Own Logo */}
      <Image src="/svg/logo.svg" alt="My App Logo" width={60} height={60} className="mb-4" />
      
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg animate-pulse">Completing sign in...</p>
        
        {/* We hide the Clerk spinner visually but keep the component for the logic */}
        <div className="opacity-0 absolute">
          <AuthenticateWithRedirectCallback />
        </div>

        {/* Your Custom Spinner */}
        <div className="w-10 h-10 border-4 border-t-accent-blue border-white/20 rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default page;
