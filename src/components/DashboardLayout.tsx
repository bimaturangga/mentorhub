import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-card flex items-center px-6 gap-4 shadow-card">
            <SidebarTrigger className="-ml-2" />
            <div className="flex items-center justify-between flex-1">
              <h1 className="text-lg font-semibold">AI-NS MentorHub</h1>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-medium">
                  M
                </div>
              </div>
            </div>
          </header>
          <div className="flex-1 p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
