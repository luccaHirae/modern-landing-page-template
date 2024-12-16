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
