"use client";

import { useContext } from "react";
import { Context } from "../Context";

export default function SendWebhook() {
  const {
    currentPage,
    valaszto,
    villanyszamla,
    villanyszamlanagy,
    tetofajta,
    tetofedoanyag,
    egtaj,
    hajlasszog,
    magassag,
    cim,
    akkumulator,
    tulpanelezes,
    felhasznalas,
  } = useContext(Context);

  const sendToWebhook = async (contextData) => {
    try {
      const response = await fetch("https://hook.eu2.make.com/wsi49d36tk5q4eoork4hwyzlqud43s8i", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contextData),
      });

      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data", await response.text());
      }
    } catch (error) {
      console.error("Error sending data", error);
    }
  };

  const handleSendData = () => {
    const dataToSend = {
      currentPage,
      valaszto,
      villanyszamla,
      villanyszamlanagy,
      tetofajta,
      tetofedoanyag,
      egtaj,
      hajlasszog,
      magassag,
      cim,
      akkumulator,
      tulpanelezes,
      felhasznalas,
    };

    sendToWebhook(dataToSend);
  };

  return (
    <button onClick={handleSendData} className="px-4 py-2 bg-blue-500 text-white rounded">
      Send Data
    </button>
  );
}
