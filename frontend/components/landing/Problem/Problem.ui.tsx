import { problemContent } from "./Problem.logic";

const icons = [
    // Calendar X - Inconsistent
    <svg key="1" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l6-6m0 6l-6-6" />
    </svg>,
    // Brain/Head - Mental Overhead
    <svg key="2" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>,
    // Puzzle - Fragmentation
    <svg key="3" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S10.5 3.089 10.5 4.125c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
    </svg>,
];

export const Problem = () => {
    return (
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="inline-block rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 mb-4">
                        The Problem
                    </span>
                    <h2 className="text-4xl font-bold text-dark sm:text-5xl lg:text-6xl mb-6">
                        {problemContent.heading}
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-text-muted">
                        {problemContent.subheading}
                    </p>
                </div>

                {/* Problem Cards */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {problemContent.problems.map((problem, index) => (
                        <div
                            key={index}
                            className="card-hover group relative rounded-3xl border border-gray-100 bg-white p-8 lg:p-10"
                        >
                            {/* Icon */}
                            <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-red-50 p-4 text-red-500 transition-all group-hover:bg-red-100 group-hover:scale-110">
                                {icons[index]}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-dark mb-4">
                                {problem.title}
                            </h3>
                            <p className="text-lg text-text-muted leading-relaxed">
                                {problem.description}
                            </p>

                            {/* Decorative Number */}
                            <div className="absolute top-8 right-8 text-6xl font-bold text-gray-100 select-none">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visual separator */}
                <div className="mt-20 flex items-center justify-center">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                    <div className="mx-4 text-text-muted">
                        <svg className="h-8 w-8 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                </div>
            </div>
        </section>
    );
};
