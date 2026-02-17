import { container, typography, card, radius } from "@/lib/design-system";

/**
 * Dashboard — post-login destination. Boilerplate UI for now.
 */
export default function DashboardPage() {
    return (
        <div className={`${container} py-8`}>
            <h1 className={typography.display}>Dashboard</h1>
            <p className={`mt-2 ${typography.subheading}`}>
                Welcome back. Here’s an overview of your content.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                    { label: "Scheduled posts", value: "0", color: "text-primary" },
                    { label: "Published this week", value: "0", color: "text-green-600" },
                    { label: "Total reach", value: "—", color: "text-text-muted" },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        className={`${card.base} ${card.padding} ${radius.lg}`}
                    >
                        <p className={typography.caption}>{stat.label}</p>
                        <p className={`mt-2 text-2xl font-bold ${stat.color}`}>
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>

            <section className="mt-10">
                <h2 className={typography.heading}>Recent activity</h2>
                <div
                    className={`mt-4 ${card.base} ${card.padding} ${radius.lg} min-h-[200px] flex items-center justify-center`}
                >
                    <p className={typography.caption}>No activity yet.</p>
                </div>
            </section>

            <section className="mt-10">
                <h2 className={typography.heading}>Quick actions</h2>
                <div className="mt-4 flex flex-wrap gap-4">
                    <button
                        type="button"
                        className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark"
                    >
                        New post
                    </button>
                    <button
                        type="button"
                        className="rounded-full border border-border bg-white px-6 py-2.5 text-sm font-medium text-dark hover:bg-gray-50"
                    >
                        View schedule
                    </button>
                </div>
            </section>
        </div>
    );
}
