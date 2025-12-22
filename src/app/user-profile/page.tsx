"use client";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Page = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  async function handleSignOut() {
    await signOut(() => router.push("/"));
  }
  return (
    <div className="text-white">
      this is user profile page
      <p>{user?.primaryEmailAddress?.emailAddress}</p>
      <p>{user?.fullName}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Page;
