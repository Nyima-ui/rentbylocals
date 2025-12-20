import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div>
      <AuthenticateWithRedirectCallback />
    </div>
  );
};

export default page;
