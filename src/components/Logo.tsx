import { twMerge } from "tailwind-merge";
import logoImage from "@/assets/images/sphereal-logo.svg?url";

export const Logo = ({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]",
        className
      )}
      style={{
        maskImage: `url(${logoImage.src})`,
        maskSize: "contain",
        ...style,
      }}
      {...props}
    ></div>
  );
};