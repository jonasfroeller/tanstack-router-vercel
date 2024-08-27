import { SensorType } from "../schema";
import { BaseWidget } from "./BaseWidget";

const sensorData: Record<SensorType, { name: string; value: string }> = {
  heatShield: { name: "Heat Shield", value: "Nominal" },
  thruster: { name: "Thruster", value: "Stable" },
  fuelCell: { name: "Fuel Cell", value: "Caution!" },
};

export const SensorWidget = ({ id }: { id: SensorType }) => {
  const sensor = sensorData[id];

  return <BaseWidget name={sensor.name}>{sensor.value}</BaseWidget>;
};
