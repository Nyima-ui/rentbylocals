"use client";
import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default Providers;
