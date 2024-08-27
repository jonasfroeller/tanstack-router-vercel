import { WidgetControls } from "../routes/dashboard";

export const WidgetsControlsBar = ({
  controls,
  updateControls,
}: {
  controls: WidgetControls;
  updateControls: (name: keyof WidgetControls, value: unknown) => void;
}) => (
  <div className="border p-2 flex gap-4 mb-4">
    <div className="flex flex-col">
      <h3>Distance Unit</h3>
      <label>
        <input
          type="radio"
          name="distanceUnit"
          value="km"
          checked={controls.distanceUnit === "km"}
          onChange={() => updateControls("distanceUnit", "km")}
          className="mr-2"
        />
        Kilometers
      </label>
      <label>
        <input
          type="radio"
          name="distanceUnit"
          value="mi"
          checked={controls.distanceUnit === "mi"}
          onChange={() => updateControls("distanceUnit", "mi")}
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
          checked={controls.temperatureUnit === "c"}
          onChange={() => updateControls("temperatureUnit", "c")}
          className="mr-2"
        />
        Celsius
      </label>
      <label>
        <input
          type="radio"
          name="temperatureUnit"
          value="f"
          checked={controls.temperatureUnit === "f"}
          onChange={() => updateControls("temperatureUnit", "f")}
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
          checked={controls.showSpeed}
          onChange={() => updateControls("showSpeed", !controls.showSpeed)}
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
            checked={controls.pressureSensors.includes("heatShield")}
            onChange={() =>
              updateControls(
                "pressureSensors",
                controls.pressureSensors.includes("heatShield")
                  ? controls.pressureSensors.filter((s) => s !== "heatShield")
                  : [...controls.pressureSensors, "heatShield"]
              )
            }
            className="mr-2"
          />
          Heat Shield
        </label>
        <label>
          <input
            type="checkbox"
            checked={controls.pressureSensors.includes("thruster")}
            onChange={() =>
              updateControls(
                "pressureSensors",
                controls.pressureSensors.includes("thruster")
                  ? controls.pressureSensors.filter((s) => s !== "thruster")
                  : [...controls.pressureSensors, "thruster"]
              )
            }
            className="mr-2"
          />
          Thruster
        </label>
        <label>
          <input
            type="checkbox"
            checked={controls.pressureSensors.includes("fuelCell")}
            onChange={() =>
              updateControls(
                "pressureSensors",
                controls.pressureSensors.includes("fuelCell")
                  ? controls.pressureSensors.filter((s) => s !== "fuelCell")
                  : [...controls.pressureSensors, "fuelCell"]
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
