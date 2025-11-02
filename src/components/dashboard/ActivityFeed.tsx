import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "completion",
    icon: CheckCircle2,
    message: "Siswa Budi telah menyelesaikan Lab 2 - OSPF Configuration",
    time: "5 menit yang lalu",
    variant: "success" as const,
  },
  {
    id: 2,
    type: "feedback",
    icon: MessageSquare,
    message: "Feedback baru diterima untuk kelas Python Batch 8",
    time: "1 jam yang lalu",
    variant: "default" as const,
  },
  {
    id: 3,
    type: "alert",
    icon: AlertCircle,
    message: "Materi CCNA Modul 4 telah diperbarui ke versi 2.1",
    time: "3 jam yang lalu",
    variant: "warning" as const,
  },
];

export function ActivityFeed() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Aktivitas Terbaru
        </CardTitle>
        <CardDescription>Notifikasi dan update real-time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-smooth">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  activity.variant === 'success' ? 'bg-green-100 text-green-600' :
                  activity.variant === 'warning' ? 'bg-orange-100 text-orange-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
