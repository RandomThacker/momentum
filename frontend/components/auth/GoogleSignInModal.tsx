"use client";

import { Modal } from "@/components/ui/Modal";
import { Logo } from "@/components/ui/Logo";
import { APP_NAME } from "@/lib/brand";
import { colors } from "@/lib/design-system";

type GoogleSignInModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function GoogleSignInModal({ isOpen, onClose }: GoogleSignInModalProps) {
  const handleGoogleSignIn = () => {
    // TODO: Implement Google OAuth
    console.log("Sign in with Google");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-3xl w-full" showCloseButton={false}>
      <div className="relative overflow-hidden rounded-2xl bg-white flex flex-col sm:flex-row shadow-xl border border-gray-100">
        {/* Left: Sign-in — focused, 60% */}
        <div className="relative flex flex-col w-full sm:w-[60%] sm:flex-shrink-0 min-w-0 p-8 sm:p-10">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 rounded-full text-gray-400 hover:text-dark hover:bg-gray-100 transition-colors z-10"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <Logo className="h-10 w-10 shrink-0" />
              <span className="font-logo text-xl font-bold text-dark tracking-tight">{APP_NAME}</span>
            </div>

            {/* Main content block — consistent left alignment */}
            <div className="flex-1 flex flex-col justify-center min-h-0">
              <h2 className="text-2xl font-bold text-dark leading-tight mb-1.5">
                Sign in to get started
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-sm">
                Plan, schedule, and publish content automatically. One click and you&apos;re in.
              </p>

              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 border-gray-200 bg-white hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 text-dark font-semibold group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-100 shrink-0 shadow-sm">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </span>
                  <span className="text-base">Continue with Google</span>
                  <svg
                    className="h-5 w-5 ml-auto text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="mt-3 text-gray-400 text-xs text-left">
                  Free forever for individuals. No credit card required.
                </p>
              </div>
            </div>

            {/* Footer — same left alignment */}
            <p className="mt-6 pt-6 border-t border-gray-100 text-gray-400 text-xs">
              © 2026 {APP_NAME}. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Right: Visual panel — 40%, blue only */}
        <div className="hidden sm:flex sm:w-[40%] relative overflow-hidden rounded-r-2xl">
          {/* Blue gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(160deg, ${colors.primaryDark} 0%, ${colors.primary} 50%, ${colors.primaryLight} 100%)`,
            }}
          />
          {/* Cross pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M28 26v-2h-2v2h-4v2h4v4h2v-4h4v-2h-4zm0-20V2h-2v4h-4v2h4v4h2V6h4V4h-4zM6 26v-2H4v2H0v2h4v4h2v-4h4v-2H6zM6 6V2H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Subtle glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 p-6 flex flex-col justify-center w-full">
            {/* Headline */}
            <h3 className="text-white text-lg font-bold mb-1">Why {APP_NAME}?</h3>
            <p className="text-blue-200 text-xs leading-relaxed mb-6">
              Everything you need to grow your online presence.
            </p>

            {/* Feature list */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: colors.yellow }}
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke={colors.dark} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <div className="text-white text-sm font-semibold">Schedule once, publish everywhere</div>
                  <div className="text-blue-200 text-xs mt-0.5">Post to X, LinkedIn, and Instagram from one dashboard.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: colors.yellow }}
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke={colors.dark} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>
                <div>
                  <div className="text-white text-sm font-semibold">Track what works</div>
                  <div className="text-blue-200 text-xs mt-0.5">Real-time analytics so you know what resonates.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: colors.yellow }}
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke={colors.dark} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div>
                  <div className="text-white text-sm font-semibold">Consistency on autopilot</div>
                  <div className="text-blue-200 text-xs mt-0.5">Set it and forget it. Your queue runs 24/7.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}
