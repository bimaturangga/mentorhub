import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Star, Clock, Users } from "lucide-react";

const stats = [
  {
    label: "Rating Rata-rata",
    value: "4.8",
    unit: "/5.0",
    icon: Star,
    trend: "+0.2",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    label: "Kelas Minggu Ini",
    value: "12",
    unit: "sesi",
    icon: Clock,
    trend: "+3",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    label: "Total Siswa Aktif",
    value: "156",
    unit: "siswa",
    icon: Users,
    trend: "+24",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

export function PerformanceStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <div className={`h-10 w-10 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.unit}</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span>{stat.trend} dari minggu lalu</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
