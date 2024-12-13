import { twMerge } from "tailwind-merge";

export const Orbit = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "size-[200px] border border-gray-200/30 rounded-full",
        className
      )}
    ></div>
  );
};
