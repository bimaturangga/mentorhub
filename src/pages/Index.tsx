import { DashboardLayout } from "@/components/DashboardLayout";
import { NextScheduleWidget } from "@/components/dashboard/NextScheduleWidget";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { PerformanceStats } from "@/components/dashboard/PerformanceStats";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-1">Dashboard</h2>
          <p className="text-muted-foreground">
            Selamat datang kembali! Berikut ringkasan aktivitas Anda hari ini.
          </p>
        </div>

        <PerformanceStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NextScheduleWidget />
          <ActivityFeed />
        </div>

        <QuickActions />
      </div>
    </DashboardLayout>
  );
};

export default Index;
