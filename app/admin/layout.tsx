import AdminSidebar from "@/components/admin/sidebar";
import AdminTopbar from "@/components/admin/topbar";

export default function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-primary/20 selection:text-primary">
            <AdminSidebar />

            <main className="ml-64 p-8 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <AdminTopbar />

                    {children}
                </div>
            </main>
        </div>
    );
}
