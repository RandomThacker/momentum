"use client";

import { SignInModalProvider } from "@/context/SignInModalContext";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <SignInModalProvider>{children}</SignInModalProvider>;
}
