import Link from "next/link";
import { APP_NAME } from "@/lib/brand";
import { logo, typography } from "@/lib/design-system";
import { Logo } from "@/components/ui/Logo";

const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Posts", href: "/dashboard" },
    { label: "Schedule", href: "/dashboard" },
    { label: "Settings", href: "/dashboard" },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background-alt flex">
            <aside className="w-64 shrink-0 border-r border-border bg-white flex flex-col">
                <Link href="/" className="flex items-center gap-3 p-6 border-b border-border">
                    <Logo className={logo.sizeDefault} />
                    <span className={logo.text}>{APP_NAME}</span>
                </Link>
                <nav className="p-4 flex flex-col gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="px-4 py-3 rounded-lg text-sm font-medium text-text-muted transition-colors hover:bg-gray-100 hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto p-4 border-t border-border">
                    <Link
                        href="/"
                        className="text-sm font-medium text-text-muted hover:text-primary"
                    >
                        ← Back to home
                    </Link>
                </div>
            </aside>

            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}
