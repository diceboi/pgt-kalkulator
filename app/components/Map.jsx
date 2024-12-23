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
import { toast } from "sonner";

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
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null); // Reference for Autocomplete instance
  const { currentPage, addPage, cim, setCim, googlemap, setGooglemap, tetofajta } =
    useContext(Context);

  const scrollToNext = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }); // Delay idő milliszekundumban
  }; 

  // Google Maps link generálása a center állapotból
  const generateGoogleMapsLink = (lat, lng) => {
    return `https://www.google.com/maps?q=${lat},${lng}`;
  };

  // Középpont frissítése térkép mozgatásakor
  const handleMapDragEnd = () => {
    if (mapRef.current) {
      const newCenter = {
        lat: mapRef.current.getCenter().lat(),
        lng: mapRef.current.getCenter().lng(),
      };
      setCenter(newCenter);
      setMarkerPosition(newCenter);
      setGooglemap(generateGoogleMapsLink(newCenter.lat, newCenter.lng));
      console.log(cim);
      console.log(googlemap);
    }
  };

  // Kereséskor középpont frissítése
  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();

      if (place.geometry) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        // Cím és Google Maps link frissítése
        setCenter(location);
        setCim(place.formatted_address || place.name);
        setGooglemap(generateGoogleMapsLink(location.lat, location.lng));
        console.log(cim);
        console.log(googlemap);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputRef.current) {
      const inputValue = inputRef.current.value;

      // Lekérjük a predikciókat
      const service = new google.maps.places.AutocompleteService();
      service.getPlacePredictions({ input: inputValue }, (predictions) => {
        if (predictions && predictions.length > 0) {
          const placeId = predictions[0].place_id;
          const placesService = new google.maps.places.PlacesService(
            mapRef.current
          );

          placesService.getDetails({ placeId }, (place) => {
            if (place && place.geometry) {
              const location = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
              };

              setCenter(location);
              setCim(place.formatted_address || place.name);
              setGooglemap(generateGoogleMapsLink(location.lat, location.lng));
            }
          });
        }
      });
    }
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
        className="rounded-3xl  mt-20 px-4"
      >
        {/* Search Box */}
        <Autocomplete
          onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Írd be a címet..."
            onKeyDown={handleKeyDown}
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
              color: "#ffffff",
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
          onDragEnd={handleMapDragEnd}
        >
          {/* Draggable Marker */}
          <Marker
            position={center} // A marker mindig az állapotban lévő középponton áll
            draggable={false} // Nem mozgatható
          />
          {/* Drawing Manager */}
          {/*<DrawingManager
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
          />*/}
        </GoogleMap>

        {/* Shape Controls */}
        {/*<div className="bg-[--antracit] p-4 mt-2">
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
        </div>*/}
      </div>
      <div className={`${cim ? 'sticky' : 'hidden' } bottom-0 p-4 flex flex-col justify-center items-center`}>
          <MainButton
            onclick={() => {addPage('7'), scrollToNext('7')}}
            classname={'animate-bounce'}
          >
            Tovább
          </MainButton>
      </div>
    </>
  );
}
