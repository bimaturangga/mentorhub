import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Video, FlaskConical } from "lucide-react";

export function NextScheduleWidget() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Jadwal Berikutnya
        </CardTitle>
        <CardDescription>Kelas yang akan datang hari ini</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">10:00 - 12:00</span>
            <span className="text-sm text-muted-foreground">2 jam lagi</span>
          </div>
          <h3 className="text-lg font-semibold">CCNA - Routing & Switching</h3>
          <p className="text-sm text-muted-foreground">Modul 3: Dynamic Routing Protocols</p>
          
          <div className="flex items-center gap-4 pt-2 text-sm">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>Batch 12 (24 siswa)</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button className="flex-1 gradient-primary border-0">
            <Video className="h-4 w-4 mr-2" />
            Mulai Kelas
          </Button>
          <Button variant="outline" className="flex-1">
            <FlaskConical className="h-4 w-4 mr-2" />
            Siapkan Lab
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
