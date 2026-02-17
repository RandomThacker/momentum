"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { GoogleSignInModal } from "@/components/auth/GoogleSignInModal";

type SignInModalContextValue = {
  isOpen: boolean;
  openSignInModal: () => void;
  closeSignInModal: () => void;
};

const SignInModalContext = createContext<SignInModalContextValue | null>(null);

export function SignInModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openSignInModal = useCallback(() => setIsOpen(true), []);
  const closeSignInModal = useCallback(() => setIsOpen(false), []);

  // Open modal when landing with ?openSignIn=1
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("openSignIn") === "1") {
      setIsOpen(true);
      window.history.replaceState({}, "", window.location.pathname || "/");
    }
  }, []);

  return (
    <SignInModalContext.Provider value={{ isOpen, openSignInModal, closeSignInModal }}>
      {children}
      <GoogleSignInModal isOpen={isOpen} onClose={closeSignInModal} />
    </SignInModalContext.Provider>
  );
}

export function useSignInModal() {
  const ctx = useContext(SignInModalContext);
  if (!ctx) {
    throw new Error("useSignInModal must be used within SignInModalProvider");
  }
  return ctx;
}

export function useSignInModalOptional() {
  return useContext(SignInModalContext);
}
