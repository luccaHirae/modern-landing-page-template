import { twMerge } from "tailwind-merge";

export const SectionContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "container py-24 md:py-36 lg:py-48 overflow-hidden",
        className
      )}
      {...props}
    />
  );
};
