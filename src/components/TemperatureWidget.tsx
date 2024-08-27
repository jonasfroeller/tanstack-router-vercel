import { TemperatureUnit } from "../schema";
import { BaseWidget } from "./BaseWidget";

export const TemperatureWidget = ({ unit }: { unit: TemperatureUnit }) => (
  <BaseWidget name="Temperature">{unit === "c" ? "25 °C" : "77 °F"}</BaseWidget>
);
