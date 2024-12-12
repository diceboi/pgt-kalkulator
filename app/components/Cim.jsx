import { MapProvider } from "../providers/map-provider";
import { MapComponent } from "./Map";

export default function Cim() {
    return (
        <MapProvider>
            <MapComponent />
        </MapProvider>
    )
}