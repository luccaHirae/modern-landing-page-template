import { twMerge } from "tailwind-merge";

export const SectionBorder = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "border-l border-r border-[var(--color-border)]",
        className
      )}
      {...props}
    />
  );
};
