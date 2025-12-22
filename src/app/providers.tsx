"use client";
import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ClerkProvider
     appearance={{
      layout:{
        logoImageUrl : "/svg/logo.svg"
      }
     }}
  >{children}</ClerkProvider>;
};

export default Providers;
