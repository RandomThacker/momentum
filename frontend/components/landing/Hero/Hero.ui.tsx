import { heroContent } from "./Hero.logic";
import { container, badge, typography, animationDelays } from "@/lib/design-system";

export const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl animate-blob" />
                <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-accent/20 to-accent/5 blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
                <div className="absolute -bottom-40 right-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%232563EB%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
            </div>

            <div className={`relative ${container} pt-32 pb-20 lg:pt-40 lg:pb-32`}>
                <div className="text-center">
                    <div className={`${badge.primary} mb-8 animate-fade-in-up`}>
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        <span className={badge.primaryText}>Now in Early Access</span>
                    </div>

                    <h1 className={`mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-dark sm:text-6xl lg:text-7xl xl:text-8xl animate-fade-in-up ${animationDelays[100]}`}>
                        {heroContent.headline.part1}{" "}
                        <span className="relative inline-block">
                            <span className="text-gradient">{heroContent.headline.part2}</span>
                            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                                <path d="M0 9c50-8 100-8 150-2s50 4 50 4" stroke="url(#underline-gradient)" strokeWidth="4" fill="none" strokeLinecap="round"/>
                                <defs>
                                    <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#2563EB"/>
                                        <stop offset="100%" stopColor="#FBBF24"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h1>

                    <p className={`mx-auto mt-8 max-w-2xl ${typography.subheading} lg:text-2xl animate-fade-in-up ${animationDelays[200]}`}>
                        {heroContent.supportiveLine}
                    </p>

                    <div className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up ${animationDelays[300]}`}>
                        <a
                            href="/signin"
                            className="btn-primary group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-light px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
                        >
                            {heroContent.ctaText}
                            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <button className="group flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-dark transition-all hover:border-primary/30 hover:bg-gray-50">
                            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch Demo
                        </button>
                    </div>

                    <div className={`mt-16 animate-fade-in-up ${animationDelays[400]}`}>
                        <p className="text-sm text-text-muted mb-6">Trusted by 500+ creators and teams</p>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <div className="flex -space-x-3">
                                {['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500'].map((color, i) => (
                                    <div key={i} className={`h-12 w-12 rounded-full ${color} border-3 border-white flex items-center justify-center text-white font-bold shadow-lg`}>
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-dark">4.9/5</span>
                                <span className="text-sm text-text-muted">from 200+ reviews</span>
                            </div>
                        </div>
                    </div>

                    <div className={`mt-20 animate-fade-in-up ${animationDelays[500]}`}>
                        <div className="relative mx-auto max-w-5xl">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl opacity-50" />
                            <div className="relative rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl">
                                <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 lg:p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-light" />
                                            <div className="h-4 w-32 rounded bg-gray-200" />
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="h-8 w-20 rounded-lg bg-gray-200" />
                                            <div className="h-8 w-24 rounded-lg bg-primary" />
                                        </div>
                                    </div>
                                    <div className="grid gap-4 lg:grid-cols-3">
                                        {[
                                            { label: 'Scheduled Posts', value: '24', color: 'from-primary to-blue-400' },
                                            { label: 'Total Reach', value: '12.5K', color: 'from-green-500 to-emerald-400' },
                                            { label: 'Engagement', value: '+27%', color: 'from-accent to-yellow-400' },
                                        ].map((stat, i) => (
                                            <div key={i} className="rounded-xl bg-white p-5 shadow-sm">
                                                <div className="text-sm text-text-muted mb-1">{stat.label}</div>
                                                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                                    {stat.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 rounded-xl bg-white p-5 shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="h-4 w-24 rounded bg-gray-200" />
                                            <div className="flex gap-1">
                                                <div className="h-6 w-6 rounded bg-gray-100" />
                                                <div className="h-6 w-6 rounded bg-gray-100" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-2">
                                            {[...Array(7)].map((_, i) => (
                                                <div key={i} className="text-center text-xs text-text-muted py-1">
                                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}
                                                </div>
                                            ))}
                                            {[...Array(35)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`aspect-square rounded-lg flex items-center justify-center text-sm ${
                                                        [5, 12, 15, 19, 22, 26, 30].includes(i)
                                                            ? 'bg-primary text-white'
                                                            : [8, 17, 24].includes(i)
                                                            ? 'bg-accent text-dark'
                                                            : 'bg-gray-50 text-text-muted'
                                                    }`}
                                                >
                                                    {i + 1}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 text-text-muted">
                    <span className="text-sm">Scroll to explore</span>
                    <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};
