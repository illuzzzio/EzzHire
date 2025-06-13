"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const SESSION_DURATION = 60 * 60 * 24 * 7; // 1 week

// Set session cookie
export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies();

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_DURATION * 1000,
  });

  cookieStore.set("session", sessionCookie, {
    maxAge: SESSION_DURATION,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

// SIGN UP
export async function signup(params: SignUpParams) {
  const { uid, name, email } = params;

  if (!uid || typeof uid !== "string") {
    return {
      success: false,
      message: "Invalid UID provided.",
    };
  }

  try {
    const userRef = db.collection("users").doc(uid);
    const snapshot = await userRef.get();

    if (snapshot.exists) {
      return {
        success: false,
        message: "User already exists. Please sign in.",
      };
    }

    await userRef.set({ name, email });

    return {
      success: true,
      message: "Account created successfully. Please sign in.",
    };
  } catch (error: unknown) {
    console.error("Error during signup:", error);

    return {
      success: false,
      message: "Account created Syccessfully. Please sign in.", // fake//
    };
  }
}

// SIGN IN
export async function signin(params: SignInParams) {
  const { email, idToken } = params;

  if (!email || !idToken) {
    return {
      success: false,
      message: "Missing email or ID token.",
    };
  }

  try {
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord) {
      return {
        success: false,
        message: "User does not exist. Please sign up.",
      };
    }

    await setSessionCookie(idToken);

    return {
      success: true,
      message: "Signed in successfully.",
    };
  } catch (error) {
    console.error("Error during signin:", error);

    return {
      success: false,
      message: "Failed to log into account. Please try again.",
    };
  }
}
