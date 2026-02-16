import { solutionContent } from "./Solution.logic";

const icons = [
    // Map - Plan
    <svg key="1" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>,
    // Clock - Schedule
    <svg key="2" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Sparkles - Quality
    <svg key="3" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>,
];

export const Solution = () => {
    return (
        <section id="features" className="relative py-24 lg:py-32 bg-gradient-to-b from-primary to-primary-dark overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
                {/* Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold text-accent mb-4">
                        The Solution
                    </span>
                    <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6">
                        {solutionContent.heading}
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-blue-100">
                        {solutionContent.subheading}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {solutionContent.features.map((feature, index) => (
                        <div
                            key={index}
                            className="card-hover group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10"
                        >
                            {/* Icon */}
                            <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-accent p-4 text-dark shadow-lg shadow-accent/25 transition-transform group-hover:scale-110">
                                {icons[index]}
                            </div>

                            {/* Step Number */}
                            <div className="absolute top-8 right-8 flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/5">
                                <span className="text-lg font-bold text-white">{index + 1}</span>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-lg text-blue-100 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {[
                        { value: "10x", label: "Faster Planning" },
                        { value: "50%", label: "Less Stress" },
                        { value: "3x", label: "More Consistency" },
                        { value: "24/7", label: "Auto Publishing" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-blue-200">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
