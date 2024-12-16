"use client";

import { useState, useRef, useContext } from "react";
import { Context } from "../Context";
import {
  GoogleMap,
  Autocomplete,
  Marker,
  DrawingManager,
} from "@react-google-maps/api";
import SecondaryButton from "./UI/SecondaryButton";
import MainButton from "./UI/MainButton";
import Paragraph from "./Typo/Paragraph";

const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultMapCenter = {
  lat: 47.497913,
  lng: 19.040236, // Budapest coordinates
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

export default function MapComponent() {
  const [center, setCenter] = useState(defaultMapCenter); // Map center
  const [markerPosition, setMarkerPosition] = useState(defaultMapCenter); // Initial marker position
  const [shapes, setShapes] = useState([]); // State to store drawn shapes
  const [drawingMode, setDrawingMode] = useState(null); // Drawing mode (null = none)
  const mapRef = useRef(null); // Reference to the map
  const autocompleteRef = useRef(null); // Reference for Autocomplete instance
  const { currentPage, setCurrentPage } = useContext(Context);

  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();

      if (place.geometry) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        // Update the map center and marker position
        setCenter(location);
        setMarkerPosition(location);
      }
    }
  };

  const handleMarkerDragEnd = (e) => {
    const newPosition = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setMarkerPosition(newPosition); // Update marker position state
  };

  const handleDrawingComplete = (shape) => {
    const newShape = {
      id: shapes.length + 1,
      type: shape.type,
      overlay: shape.overlay,
    };

    setShapes((prevShapes) => [...prevShapes, newShape]);

    // Deactivate the drawing mode after the shape is drawn
    setDrawingMode(null);
  };

  const deleteShape = (id) => {
    // Remove a specific shape by ID
    const shapeToRemove = shapes.find((shape) => shape.id === id);
    if (shapeToRemove) {
      shapeToRemove.overlay.setMap(null);
      setShapes((prevShapes) => prevShapes.filter((shape) => shape.id !== id));
    }
  };

  const clearAllShapes = () => {
    // Remove all shapes
    shapes.forEach((shape) => shape.overlay.setMap(null));
    setShapes([]);
  };

  return (
    <>
      <div
        style={{ width: "100%", height: "500px", position: "relative" }}
        className="rounded-3xl lg:mb-32 mb-52 mt-20 px-4"
      >
        {/* Search Box */}
        <Autocomplete
          onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Írd be a címet..."
            style={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              width: "100%",
              padding: "10px",
              width: "95%",
              borderRadius: "30px",
              border: "1px solid var(--white-border)",
              background: "transparent",
              color: "#ffffff"
            }}
          />
        </Autocomplete>

        {/* Google Map */}
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={center}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
          onLoad={(map) => (mapRef.current = map)} // Store map reference
        >
          {/* Draggable Marker */}
          <Marker
            position={markerPosition}
            draggable={true}
            onDragEnd={handleMarkerDragEnd}
          />
          {/* Drawing Manager */}
          <DrawingManager
            options={{
              drawingMode: drawingMode,
              drawingControl: false, // Disable built-in drawing control UI
              circleOptions: {
                fillColor: "#ff0000",
                fillOpacity: 0.4,
                strokeWeight: 1,
                clickable: false,
                editable: true,
                zIndex: 1,
              },
              polygonOptions: {
                fillColor: "#00ff00",
                fillOpacity: 0.4,
                strokeWeight: 1,
                clickable: false,
                editable: true,
                zIndex: 1,
              },
            }}
            onOverlayComplete={(e) => handleDrawingComplete(e)}
          />
        </GoogleMap>

        {/* Shape Controls */}
        <div className="bg-[--antracit] p-4 mt-2">
          <Paragraph classname="mb-2 text-white">
            Ha extra segítőkész akarsz lenni, kérlek az &quot;Alakzat
            rajzolása&quot; gomb-bal rajzold körbe az a felületet ahova a
            napelemrendszert szeretnéd.
          </Paragraph>
          <div className="flex lg:flex-row flex-col gap-2 mb-4">
            <button
              className="font-bold xl:text-sm text-xs tracking-wide border border-[--green] px-4 py-2 text-[--green] hover:bg-[--green] hover:text-[--black] transition-all rounded-3xl min-w-fit"
              onClick={() => setDrawingMode("polygon")}
            >
              Alakzat rajzolás
            </button>
            <button
              className="font-bold xl:text-sm text-xs tracking-wide border border-red-500 px-4 py-2 text-red-500 hover:bg-red-500 hover:text-[--black] transition-all rounded-3xl min-w-fit"
              onClick={clearAllShapes}
            >
              Minden alakzat törlése
            </button>
          </div>
          <ul className="flex gap-4">
            {shapes.map((shape) => (
              <li key={shape.id} className="mb-1">
                Felület -{" "}
                <button
                  className="text-red-500 underline"
                  onClick={() => deleteShape(shape.id)}
                >
                  Törlés
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sticky bottom-0 bg-[--transparent] border-t border-[--white-border] bg-opacity-5 backdrop-blur-xl p-4 flex flex-nowrap justify-center gap-4 items-center w-full">
        <SecondaryButton onclick={() => setCurrentPage("7")}>
          Vissza
        </SecondaryButton>
        <MainButton onclick={() => setCurrentPage("9")}>Tovább</MainButton>
      </div>
    </>
  );
}
