import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical } from "lucide-react";

const VirtualLab = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-1">Virtual Lab</h2>
          <p className="text-muted-foreground">
            Kelola dan monitor environment lab siswa
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-primary" />
              Pusat Kendali Lab
            </CardTitle>
            <CardDescription>Fitur virtual lab akan segera hadir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              Pusat kendali lab dalam pengembangan
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default VirtualLab;
