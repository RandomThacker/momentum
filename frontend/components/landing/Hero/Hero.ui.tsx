import { heroContent } from "./Hero.logic";
import { LINKS } from "@/lib/constants";
import { container, typography, animationDelays, colors } from "@/lib/design-system";

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
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                        </span>
                        <span className="text-sm font-medium text-white">Now in Early Access</span>
                    </div>

                    <h1 className={`mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-dark sm:text-6xl lg:text-7xl xl:text-8xl animate-fade-in-up ${animationDelays[100]}`}>
                        {heroContent.headline.part1}{" "}
                        <span className="relative inline-block">
                            <span className="text-primary">{heroContent.headline.part2}</span>
                            <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ backgroundColor: colors.yellow }} />
                        </span>
                    </h1>

                    <p className={`mx-auto mt-8 max-w-2xl ${typography.subheading} lg:text-2xl animate-fade-in-up ${animationDelays[200]}`}>
                        {heroContent.supportiveLine}
                    </p>

                    <div className={`mt-12 animate-fade-in-up ${animationDelays[300]}`}>
                        <a
                            href={LINKS.signIn}
                            className="btn-primary group inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
                            style={{ backgroundColor: colors.primary }}
                        >
                            {heroContent.ctaText}
                            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>

                    <div className={`mt-20 animate-fade-in-up ${animationDelays[400]}`}>
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
                                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                                <div key={i} className="text-center text-xs text-text-muted py-1">
                                                    {d}
                                                </div>
                                            ))}
                                            {/* Empty cells so month starts on Tuesday (Sun, Mon blank) */}
                                            {[0, 1].map((i) => (
                                                <div key={`empty-${i}`} className="aspect-square rounded-lg bg-transparent" />
                                            ))}
                                            {[...Array(31)].map((_, i) => {
                                                const day = i + 1;
                                                return (
                                                    <div
                                                        key={i}
                                                        className={`aspect-square rounded-lg flex items-center justify-center text-sm ${
                                                            [5, 12, 15, 19, 22, 26, 30].includes(day)
                                                                ? 'bg-primary text-white'
                                                                : [8, 17, 24].includes(day)
                                                                ? 'bg-accent text-dark'
                                                                : 'bg-gray-50 text-text-muted'
                                                        }`}
                                                    >
                                                        {day}
                                                    </div>
                                                );
                                            })}
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
