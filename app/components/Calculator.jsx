"use client";

import { useContext, useEffect, useRef, useState } from "react";
import H3 from "./Typo/H3";

export default function Calculator() {
  return (
    <section className="flex w-full lg:min-h-[80vh] bg-[--black] pt-2">
      <div className="container m-auto">
        
        {/*CSempék*/}
        <div className="flex flex-col gap-4 bg-[--white-bg] w-full h-[20vh] rounded-lg shadow-md">
          <H3>Akvárium</H3>
        </div>

      </div>
    </section>
  );
}
