import { cva, VariantProps } from "class-variance-authority";

const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      variant: {
        primary:
          "border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]",
        secondary: "",
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

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof classes> {}

export const Button = ({
  className,
  variant,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classes({ variant, disabled, className })}
      disabled={disabled ?? undefined}
      {...props}
    />
  );
};
