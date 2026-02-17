"use client";

import { ctaContent } from "./CTA.logic";
import { container, containerNarrow, sectionPadding, colors, radius } from "@/lib/design-system";
import { useSignInModal } from "@/context/SignInModalContext";

/** Subtle cross/plus pattern for blue CTA background */
const blueCrossPattern =
  "bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.06%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]";

export const CTA = () => {
    const { openSignInModal } = useSignInModal();
    return (
        <section id="pricing" className={`relative ${sectionPadding} bg-white overflow-hidden`}>
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl" />
            </div>

            <div className={`relative ${container}`}>
                <div className={containerNarrow}>
                    <div className={`relative ${radius.xl} overflow-hidden shadow-xl shadow-primary/20 border border-white/10 bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-16`}>
                        <div className={`absolute inset-0 ${blueCrossPattern}`} />
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

                        <div className="relative text-center">
                            <div className="inline-flex items-center justify-center rounded-2xl bg-white/15 border border-accent/30 p-4 shadow-lg shadow-accent/15 mb-8 backdrop-blur-sm">
                                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke={colors.yellow} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>

                            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6">
                                {ctaContent.heading}
                            </h2>
                            <p className="mx-auto max-w-xl text-xl text-blue-100 mb-10">
                                {ctaContent.subheading}
                            </p>

                            <div className="mx-auto max-w-lg">
                                <button
                                    type="button"
                                    onClick={openSignInModal}
                                    className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-dark transition-all hover:scale-105"
                                    style={{ backgroundColor: colors.yellow }}
                                >
                                    {ctaContent.buttonText}
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-blue-100">
                                {['Unlimited posts', 'Multi-platform', 'Analytics', 'Priority support'].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.yellow }}>
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
