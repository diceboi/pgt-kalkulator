"use client"

import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const MetaPixelTracker = () => {
    useEffect(() => {
      const pixelId = "109272727997510";
      ReactPixel.init(pixelId);
      ReactPixel.pageView();
    }, []);
    return null;
  };
  export default MetaPixelTracker;