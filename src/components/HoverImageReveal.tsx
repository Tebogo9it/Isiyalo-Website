"use client";

import React, { useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type Transition as MotionTransition,
} from "framer-motion";

interface Item {
  text?: string;
  image?: { src?: string; srcSet?: string; alt?: string };
  link?: string;
}

interface ItemsValue {
  itemCount?: number;
  [key: string]: unknown;
}

const MAX_ITEMS = 6;

interface FontValue {
  fontSize?: number | string;
  letterSpacing?: number | string;
  lineHeight?: number | string;
  [key: string]: unknown;
}

interface HoverImageRevealProps {
  items?: ItemsValue;
  font?: FontValue;
  textColor?: string;
  dimColor?: string;
  align?: "left" | "center" | "right";
  rowGap?: number;
  imageWidth?: number;
  imageHeight?: number;
  rounded?: number;
  offsetX?: number;
  offsetY?: number;
  followStrength?: number;
  transition?: MotionTransition;
  backgroundColor?: string;
  style?: CSSProperties;
}

const DEFAULT_ITEMS_DATA: { text: string; src: string }[] = [
  {
    text: "TRAUMA RECOVERY CIRCLES",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
  },
  {
    text: "PARENTING WORKSHOPS",
    src: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    text: "RESILIENCE PROGRAMS",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
  },
  {
    text: "YOUTH MENTAL HEALTH",
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop",
  },
  {
    text: "SOWETO COMMUNITY CARE",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
  },
];

const DEFAULT_ITEMS: ItemsValue = {
  itemCount: 5,
  item1: {
    text: DEFAULT_ITEMS_DATA[0].text,
    image: { src: DEFAULT_ITEMS_DATA[0].src },
  },
  item2: {
    text: DEFAULT_ITEMS_DATA[1].text,
    image: { src: DEFAULT_ITEMS_DATA[1].src },
  },
  item3: {
    text: DEFAULT_ITEMS_DATA[2].text,
    image: { src: DEFAULT_ITEMS_DATA[2].src },
  },
  item4: {
    text: DEFAULT_ITEMS_DATA[3].text,
    image: { src: DEFAULT_ITEMS_DATA[3].src },
  },
  item5: {
    text: DEFAULT_ITEMS_DATA[4].text,
    image: { src: DEFAULT_ITEMS_DATA[4].src },
  },
};

const DEFAULT_FONT: FontValue = {
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: 48,
  lineHeight: "1em",
  letterSpacing: "-0.04em",
  textAlign: "center",
};

const DEFAULT_TRANSITION: MotionTransition = {
  type: "spring",
  stiffness: 400,
  damping: 40,
  mass: 1,
};

const alignToFlex: Record<string, CSSProperties["alignItems"]> = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};
const alignToText: Record<string, CSSProperties["textAlign"]> = {
  left: "left",
  center: "center",
  right: "right",
};

export default function HoverImageReveal({
  items = DEFAULT_ITEMS,
  font = DEFAULT_FONT,
  textColor = "var(--foreground)",
  dimColor = "#FC72B9",
  align = "center",
  rowGap = 40,
  imageWidth = 360,
  imageHeight = 480,
  rounded = 43,
  offsetX = 160,
  offsetY = 0,
  followStrength = 8,
  transition = DEFAULT_TRANSITION,
  backgroundColor = "transparent",
  style,
}: HoverImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const stiffness = 60 + followStrength * 5;
  const springCfg = { stiffness, damping: 28, mass: 0.5 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  const data = items || DEFAULT_ITEMS;
  const count = Math.max(
    1,
    Math.min(MAX_ITEMS, (data.itemCount as number) || 5)
  );
  const list: Item[] = [];
  for (let i = 1; i <= count; i++) {
    const it = data[`item${i}`] as Item | undefined;
    const fallback = DEFAULT_ITEMS_DATA[i - 1];
    list.push({
      text: it?.text ?? fallback?.text ?? `Item ${i}`,
      image: it?.image ?? (fallback ? { src: fallback.src } : undefined),
      link: it?.link,
    });
  }
  const anyActive = hovered != null;

  const onMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left + offsetX);
    rawY.set(e.clientY - rect.top + offsetY);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={() => setHovered(null)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: alignToFlex[align],
        gap: `${rowGap}px`,
        padding: "32px 16px",
        boxSizing: "border-box",
        cursor: "default",
        ...(font as CSSProperties),
        ...style,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: imageWidth,
          height: imageHeight,
          borderRadius: rounded,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 2,
        }}
        animate={{ opacity: anyActive ? 1 : 0 }}
        transition={transition}
      >
        {list.map((item, i) => {
          const src = item.image?.src;
          const yPos =
            hovered == null
              ? "100%"
              : i < hovered
                ? "-100%"
                : i > hovered
                  ? "100%"
                  : "0%";
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{ y: yPos }}
              transition={transition}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              {src ? (
                <img
                  src={src}
                  alt={item.image?.alt || item.text || ""}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg,#333,#111)",
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <div
        onMouseLeave={() => setHovered(null)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: alignToFlex[align],
          gap: `${rowGap}px`,
        }}
      >
        {list.map((item, i) => {
          const isHovered = hovered === i;
          const color = anyActive ? (isHovered ? textColor : dimColor) : textColor;
          const copyStyle: CSSProperties = {
            display: "block",
            color,
            transition: "color 0.2s ease",
            whiteSpace: "pre-wrap",
            textAlign: alignToText[align],
          };
          const inner = (
            <motion.div
              style={{ position: "relative" }}
              animate={{ y: isHovered ? "-100%" : "0%" }}
              transition={transition}
            >
              <span style={copyStyle}>{item.text}</span>
              <span
                aria-hidden
                style={{
                  ...copyStyle,
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                }}
              >
                {item.text}
              </span>
            </motion.div>
          );
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              style={{
                overflow: "hidden",
                cursor: item.link ? "pointer" : "default",
              }}
            >
              {item.link ? (
                <a
                  href={item.link}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
