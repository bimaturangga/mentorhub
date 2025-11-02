import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, FlaskConical, MessageSquare } from "lucide-react";

const actions = [
  {
    label: "Lihat Materi",
    description: "Akses repositori materi ajar",
    icon: FileText,
    href: "/materials",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    label: "Jadwal Lengkap",
    description: "Lihat semua jadwal mengajar",
    icon: Calendar,
    href: "/calendar",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    label: "Kelola Lab",
    description: "Monitor virtual lab siswa",
    icon: FlaskConical,
    href: "/lab",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    label: "Feedback",
    description: "Lihat feedback siswa",
    icon: MessageSquare,
    href: "/analytics",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

export function QuickActions() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Aksi Cepat</CardTitle>
        <CardDescription>Pintasan ke fitur utama platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.label}
                variant="outline"
                className="h-auto flex flex-col items-start p-4 hover:shadow-card transition-smooth"
                asChild
              >
                <a href={action.href}>
                  <div className={`h-10 w-10 rounded-lg ${action.bgColor} flex items-center justify-center mb-3`}>
                    <Icon className={`h-5 w-5 ${action.color}`} />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">{action.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{action.description}</div>
                  </div>
                </a>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
