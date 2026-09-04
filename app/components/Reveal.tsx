"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  pop?: boolean;
  bare?: boolean;
  as?: ElementType;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  pop = false,
  bare = false,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const base = bare ? "" : `reveal${pop ? " reveal--pop" : ""}`;

  return (
    <Tag
      ref={ref}
      className={`${base}${className ? `${base ? " " : ""}${className}` : ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      data-visible={visible || undefined}
    >
      {children}
    </Tag>
  );
}
