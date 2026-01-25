import { ctaContent } from "./CTA.logic";

export const CTA = () => {
    return (
        <section id="pricing" className="relative py-24 lg:py-32 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Main CTA Card */}
                    <div className="relative rounded-3xl bg-gradient-to-br from-dark to-dark-light p-8 lg:p-16 overflow-hidden">
                        {/* Background decorations inside card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                        
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl" />
                        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-accent/50 rounded-br-3xl" />

                        <div className="relative text-center">
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-light p-4 shadow-lg shadow-accent/30 mb-8">
                                <svg className="h-10 w-10 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>

                            {/* Headline */}
                            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6">
                                {ctaContent.heading}
                            </h2>
                            <p className="mx-auto max-w-xl text-xl text-gray-300 mb-10">
                                {ctaContent.subheading}
                            </p>

                            {/* Email Form */}
                            <div className="mx-auto max-w-lg">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm"
                                    />
                                    <button className="btn-primary rounded-full bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-lg font-bold text-dark shadow-lg shadow-accent/30 transition-all hover:shadow-xl hover:shadow-accent/40 hover:scale-105">
                                        {ctaContent.buttonText}
                                    </button>
                                </div>
                                <p className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                                    <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Free forever for basic features. No credit card required.
                                </p>
                            </div>

                            {/* Features list */}
                            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-300">
                                {['Unlimited posts', 'Multi-platform', 'Analytics', 'Priority support'].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex flex-col items-center">
                            <div className="flex -space-x-2 mb-4">
                                {['bg-blue-500', 'bg-green-500', 'bg-purple-500'].map((color, i) => (
                                    <div key={i} className={`h-10 w-10 rounded-full ${color} border-2 border-white flex items-center justify-center text-white font-bold text-sm`}>
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                ))}
                            </div>
                            <blockquote className="text-lg text-text-muted italic max-w-lg">
                                &ldquo;Momentum completely transformed how I approach content creation. I went from posting once a month to 4x a week.&rdquo;
                            </blockquote>
                            <div className="mt-4">
                                <div className="font-semibold text-dark">Sarah Chen</div>
                                <div className="text-sm text-text-muted">Content Creator, 50K+ followers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
