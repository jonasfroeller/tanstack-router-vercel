import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodSearchValidator } from "@tanstack/router-zod-adapter";
import { z } from "zod";
import { AltitudeWidget } from "../components/AltitudeWidget";
import { TemperatureWidget } from "../components/TemperatureWidget";
import { SpeedWidget } from "../components/SpeedWidget";
import { SensorWidget } from "../components/SensorWidget";
import { distanceUnit, sensorType, temperatureUnit } from "../schema";
import { WidgetsControlsBar } from "../components/WidgetsControlsBar";

const widgetControlsSchema = z.object({
  distanceUnit: distanceUnit.default("km"),
  temperatureUnit: temperatureUnit.default("c"),
  pressureSensors: z.array(sensorType).default([]),
  showSpeed: z.boolean().default(false),
});

export type WidgetControls = z.infer<typeof widgetControlsSchema>;

export const Route = createFileRoute("/dashboard")({
  validateSearch: zodSearchValidator(widgetControlsSchema),
  component: DashboardPage,
});

function DashboardPage() {
  const navigate = useNavigate({ from: Route.fullPath });

  const search = Route.useSearch();

  const updateSearch = (name: keyof WidgetControls, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) });
  };

  return (
    <div>
      <WidgetsControlsBar controls={search} updateControls={updateSearch} />
      <div className="flex gap-4">
        <AltitudeWidget unit={search.distanceUnit} />
        <TemperatureWidget unit={search.temperatureUnit} />
        {search.showSpeed ? <SpeedWidget unit={search.distanceUnit} /> : null}
        {search.pressureSensors.map((sensor) => (
          <SensorWidget key={sensor} id={sensor} />
        ))}
      </div>
    </div>
  );
}
