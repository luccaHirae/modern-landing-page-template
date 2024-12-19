"use client";

import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { cva, VariantProps } from "class-variance-authority";

const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      variant: {
        primary: "border-gradient",
        secondary: "bg-gray-100 text-gray-950",
        tertiary: "bg-gray-800 text-gray-200",
      },
      disabled: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
    },
    defaultVariants: {
      variant: "primary",
      disabled: false,
    },
  }
);

export interface ButtonProps extends VariantProps<typeof classes> {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  className,
  variant = "primary",
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const angle = useMotionValue(45);

  const background = useMotionTemplate`linear-gradient(var(--color-gray-950),var(--color-gray-950)) padding-box, conic-gradient(from ${angle}deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400)) border-box`;

  useEffect(() => {
    if (isHovered) {
      animate(angle, angle.get() + 360, {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      });
    } else {
      animate(angle, 45, { duration: 0.5 });
    }
  }, [angle, isHovered]);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classes({ variant, disabled, className })}
      style={variant === "primary" ? { background: background } : undefined}
      {...props}
    >
      {children}
    </motion.button>
  );
};
