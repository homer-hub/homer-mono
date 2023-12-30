import * as React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  signOut,
} from "firebase/auth";

import { auth } from "@/providers/firebase-auth";

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export default function Home() {
  const [userCredential, setUserCredential] =
    React.useState<UserCredential | null>(null);

  const handleSignInClick = async () => {
    try {
      const userCredential: UserCredential = await signInWithPopup(
        auth,
        provider
      );
      setUserCredential(userCredential);
    } catch (error) {
      console.error(error);
      setUserCredential(null);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserCredential(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div className="flex">
        {userCredential === null ? (
          <button
            className="cursor-pointer border p-4"
            onClick={handleSignInClick}
          >
            Sign-In
          </button>
        ) : (
          <button className="cursor-pointer border p-4" onClick={handleSignOut}>
            Sign-Out
          </button>
        )}
      </div>
      <ul>
        {userCredential && (
          <li>User Name: ${userCredential.user.displayName}</li>
        )}
      </ul>
    </main>
  );
}
