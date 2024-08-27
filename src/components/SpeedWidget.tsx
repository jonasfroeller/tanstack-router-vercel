import { DistanceUnit } from "../schema";
import { BaseWidget } from "./BaseWidget";

export const SpeedWidget = ({ unit }: { unit: DistanceUnit }) => (
  <BaseWidget name="Speed">{unit === "km" ? "848 km/h" : "527 mph"}</BaseWidget>
);
