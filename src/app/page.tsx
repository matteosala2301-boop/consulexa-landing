import MaintenanceScreen from "@/components/MaintenanceScreen";
import HomePage from "@/components/HomePage";
import { isMaintenanceMode } from "@/lib/maintenance";

export default function Page() {
  if (isMaintenanceMode()) {
    return <MaintenanceScreen />;
  }

  return <HomePage />;
}
