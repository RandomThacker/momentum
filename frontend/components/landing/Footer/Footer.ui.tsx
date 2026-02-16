import { APP_NAME, TAGLINE } from "@/lib/brand";
import { container, logo } from "@/lib/design-system";
import { Logo } from "@/components/ui/Logo";
import { footerNavLinks, socialLinks } from "./Footer.logic";
import { socialIcons } from "./socialIcons";

export const Footer = () => {
    return (
        <footer className="relative bg-dark text-white overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.06),transparent)] pointer-events-none" />

            <div className={`relative ${container}`}>
                <div className="py-12 lg:py-14">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
                            <a href="/" className="flex items-center gap-3 group w-fit">
                                <Logo className={logo.sizeLg} />
                                <span className={logo.textSm}>{APP_NAME}</span>
                            </a>
                            <p className="text-sm text-gray-400 max-w-xs sm:border-l sm:border-white/10 sm:pl-5">
                                {TAGLINE}
                            </p>
                        </div>

                        <nav className="flex flex-wrap items-center gap-6 lg:gap-8">
                            {footerNavLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all hover:bg-primary/20 hover:text-white"
                                    aria-label={social.name}
                                >
                                    {socialIcons[social.name]}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} {APP_NAME}</p>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                        <span className="flex items-center gap-1">
                            Made with <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg> for creators
                        </span>
                        <span className="hidden sm:inline text-white/30">·</span>
                        <span>Made by <a href="https://www.linkedin.com/in/aryan-thacker/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">Aryan Thacker</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
