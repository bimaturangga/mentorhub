import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

const Materials = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-1">Repositori Materi</h2>
          <p className="text-muted-foreground">
            Akses dan kelola materi ajar terstandar
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-primary" />
              Materi Ajar
            </CardTitle>
            <CardDescription>Repositori materi akan segera hadir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              Repositori materi dalam pengembangan
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Materials;
