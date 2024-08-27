import { WidgetControls } from "../routes/dashboard";

export const WidgetsControlsBar = ({
  controls: config,
  updateControls: updateConfig,
}: {
  controls: WidgetControls;
  updateControls: (name: keyof WidgetControls, value: unknown) => void;
}) => (
  <div className="border p-2 flex gap-4 my-4">
    <div className="flex flex-col">
      <h3>Distance Unit</h3>
      <label>
        <input
          type="radio"
          name="distanceUnit"
          value="km"
          checked={config.distanceUnit === "km"}
          onChange={() => updateConfig("distanceUnit", "km")}
          className="mr-2"
        />
        Kilometers
      </label>
      <label>
        <input
          type="radio"
          name="distanceUnit"
          value="mi"
          checked={config.distanceUnit === "mi"}
          onChange={() => updateConfig("distanceUnit", "mi")}
          className="mr-2"
        />
        Miles
      </label>
    </div>
    <div className="flex flex-col">
      <h3>Temperature Unit</h3>
      <label>
        <input
          type="radio"
          name="temperatureUnit"
          value="c"
          checked={config.temperatureUnit === "c"}
          onChange={() => updateConfig("temperatureUnit", "c")}
          className="mr-2"
        />
        Celsius
      </label>
      <label>
        <input
          type="radio"
          name="temperatureUnit"
          value="f"
          checked={config.temperatureUnit === "f"}
          onChange={() => updateConfig("temperatureUnit", "f")}
          className="mr-2"
        />
        Fahrenheit
      </label>
    </div>
    <div>
      <h3>Speed</h3>
      <label>
        <input
          type="checkbox"
          checked={config.showSpeed}
          onChange={() => updateConfig("showSpeed", !config.showSpeed)}
          className="mr-2"
        />
        Show Speed
      </label>
    </div>
    <div>
      <h3>Pressure Sensors</h3>
      <div className="flex flex-col">
        <label>
          <input
            type="checkbox"
            checked={config.pressureSensors.includes("heatShield")}
            onChange={() =>
              updateConfig(
                "pressureSensors",
                config.pressureSensors.includes("heatShield")
                  ? config.pressureSensors.filter((s) => s !== "heatShield")
                  : [...config.pressureSensors, "heatShield"]
              )
            }
            className="mr-2"
          />
          Heat Shield
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.pressureSensors.includes("thruster")}
            onChange={() =>
              updateConfig(
                "pressureSensors",
                config.pressureSensors.includes("thruster")
                  ? config.pressureSensors.filter((s) => s !== "thruster")
                  : [...config.pressureSensors, "thruster"]
              )
            }
            className="mr-2"
          />
          Thruster
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.pressureSensors.includes("fuelCell")}
            onChange={() =>
              updateConfig(
                "pressureSensors",
                config.pressureSensors.includes("fuelCell")
                  ? config.pressureSensors.filter((s) => s !== "fuelCell")
                  : [...config.pressureSensors, "fuelCell"]
              )
            }
            className="mr-2"
          />
          Fuel Cell
        </label>
      </div>
    </div>
  </div>
);
