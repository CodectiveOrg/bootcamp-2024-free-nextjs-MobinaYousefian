"use client";
import { ReactElement, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import PopoverProviderComponent from "@/app/activity/[id]/providers/popover/popover.provider";
import PopoverComponent from "@/app/activity/[id]/components/canvas/popover/popover.component";

import styles from "./seat-map.module.css";

const Canvas = dynamic(
  () => import("@/app/activity/[id]/components/canvas/canvas.component"),
  {
    ssr: false,
  },
);

export default function SeatMapComponent(): ReactElement {
  const sectionRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setCanvasWidth(event[0].contentBoxSize[0].inlineSize);
      setCanvasHeight(event[0].contentBoxSize[0].blockSize);
    });

    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [sectionRef]);

  return (
    <section className={styles["seat-map"]} ref={sectionRef}>
      <PopoverProviderComponent defaultPopoverData={null}>
        <Canvas width={canvasWidth} height={canvasHeight} />
        <PopoverComponent canvasWidth={canvasWidth} />
      </PopoverProviderComponent>
    </section>
  );
}
