import { AppSidebar } from "@/components/layouts/sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/layouts/sidebar/sidebar";
// import { Sidebar } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex h-screen">
        {/* サイドバー */}
        <SidebarProvider>
          <AppSidebar />
          {/* メインコンテンツ */}
          <main className="flex-1 p-4">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>

      </div>
    </div>
  );
}
