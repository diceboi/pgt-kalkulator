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
  const [showMap, setShowMap] = useState(false);
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null); // Reference for Autocomplete instance

  const [address, setAddress] = useState({
    postalCode: "",
    city: "",
    street: "",
    houseNumber: "",
  });

  const { currentPage, addPage, cim, setCim, googlemap, setGooglemap, tetofajta } =
    useContext(Context);

  const mapRef = useRef(null);

  const isAddressComplete = Object.values(address).every((field) => field.trim() !== "");

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

  const fetchCoordinates = async () => {
    const fullAddress = `${address.postalCode} ${address.city}, ${address.street} ${address.houseNumber}`;
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: fullAddress }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        const newCenter = { lat: location.lat(), lng: location.lng() };

        setCenter(newCenter);
        setMarkerPosition(newCenter);
        setShowMap(true);
        setCim(fullAddress);
        setGooglemap(generateGoogleMapsLink(newCenter.lat, newCenter.lng));
      } else {
        toast.error("Nem sikerült megtalálni a címet. Kérlek, ellenőrizd az adatokat.");
      }
    });
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
        style={{ width: "100%", position: "relative" }}
        className="rounded-3xl px-4"
      >
        <div className="flex lg:flex-row flex-col gap-4 p-4">
        <input
          type="text"
          placeholder="Irányítószám"
          value={address.postalCode}
          onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
          className="w-full bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
        />
        <input
          type="text"
          placeholder="Település"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
          className="w-full bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
        />
        <input
          type="text"
          placeholder="Utca"
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
          className="w-full bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
        />
        <input
          type="text"
          placeholder="Házszám"
          value={address.houseNumber}
          onChange={(e) => setAddress({ ...address, houseNumber: e.target.value })}
          className="w-full bg-[--antracit] border border-[--white-border] rounded-full px-4 py-2 text-white"
        />

        <MainButton
          onclick={fetchCoordinates}
          disabled={!isAddressComplete}
          classname={`w-full ${!isAddressComplete ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Térkép megnyitása
        </MainButton>
      </div>
        {/* Google Térkép */}
      {showMap && (
        <div style={{ width: "100%", height: "500px", position: "relative" }} className="rounded-3xl mt-4">
          <GoogleMap
            mapContainerStyle={defaultMapContainerStyle}
            center={center}
            zoom={defaultMapZoom}
            options={defaultMapOptions}
            onLoad={(map) => (mapRef.current = map)}
            onDragEnd={handleMapDragEnd} // Eseménykezelő hozzáadása
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      )}
      </div>
      <div className={`${cim ? 'sticky' : 'hidden' } bottom-0 p-4 flex flex-col justify-center items-center`}>
          <MainButton
            onclick={() => {addPage('8'), scrollToNext('8')}}
            classname={'animate-bounce'}
          >
            Tovább
          </MainButton>
      </div>
    </>
  );
}
