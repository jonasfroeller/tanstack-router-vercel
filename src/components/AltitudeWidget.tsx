import { DistanceUnit } from "../schema";
import { BaseWidget } from "./BaseWidget";

export const AltitudeWidget = ({ unit }: { unit: DistanceUnit }) => (
  <BaseWidget name="Altitude">
    {unit === "km" ? "4,3 km" : "2.67 mi"}
  </BaseWidget>
);
