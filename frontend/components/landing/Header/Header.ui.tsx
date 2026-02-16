"use client";

import { useState, useEffect } from "react";
import { APP_NAME } from "@/lib/brand";
import { LINKS, NAV_LINKS } from "@/lib/constants";
import { container, logo, buttonVariants } from "@/lib/design-system";
import { Logo } from "@/components/ui/Logo";
import { SCROLL_THRESHOLD } from "./Header.logic";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "glass border-b border-gray-200/50 shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className={container}>
                <div className="flex h-20 items-center justify-between">
                    <a href="/" className="flex items-center gap-3 group">
                        <Logo />
                        <span className={logo.text}>{APP_NAME}</span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={buttonVariants.ghost}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center">
                        <a
                            href={LINKS.signIn}
                            className={buttonVariants.primarySm}
                        >
                            Sign in
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-text-muted"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <nav className="flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={buttonVariants.ghost}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                                <a
                                    href={LINKS.signIn}
                                    className={`${buttonVariants.primarySm} text-center`}
                                >
                                    Sign in
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
