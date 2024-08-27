import { z } from "zod";

export const distanceUnit = z.union([z.literal("km"), z.literal("mi")]);
export type DistanceUnit = z.infer<typeof distanceUnit>;

export const temperatureUnit = z.union([z.literal("c"), z.literal("f")]);
export type TemperatureUnit = z.infer<typeof temperatureUnit>;

export const sensorType = z.union([
  z.literal("heatShield"),
  z.literal("thruster"),
  z.literal("fuelCell"),
]);
export type SensorType = z.infer<typeof sensorType>;
