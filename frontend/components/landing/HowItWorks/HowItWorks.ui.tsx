import { howItWorksContent } from "./HowItWorks.logic";
import { LINKS } from "@/lib/constants";
import { container, sectionPadding, typography, buttons } from "@/lib/design-system";

const stepIcons = [
    <svg key="1" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>,
    <svg key="2" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>,
    <svg key="3" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>,
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className={`relative ${sectionPadding} bg-gray-50 overflow-hidden`}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)]" />

            <div className={`relative ${container}`}>
                <div className="text-center mb-16 lg:mb-20">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
                        How It Works
                    </span>
                    <h2 className={`${typography.display} mb-6`}>
                        {howItWorksContent.heading}
                    </h2>
                    <p className={`mx-auto max-w-2xl ${typography.subheading}`}>
                        Three simple steps to content freedom
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute top-24 left-0 right-0 hidden lg:block">
                        <div className="mx-auto max-w-4xl h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-30" />
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {howItWorksContent.steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="card-hover relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100">
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-light text-white text-xl font-bold shadow-lg shadow-primary/30">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="mt-6 mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 text-primary">
                                        {stepIcons[index]}
                                    </div>
                                    <h3 className="text-2xl font-bold text-dark mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-text-muted leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                {index < 2 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-dark">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a
                        href={LINKS.signIn}
                        className={`${buttons.primary} inline-flex items-center gap-2`}
                    >
                        Sign in
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};
