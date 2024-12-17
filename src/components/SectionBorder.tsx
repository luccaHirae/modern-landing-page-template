import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

export interface SectionBorderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  borderTop?: boolean;
}

export const SectionBorder = ({
  className,
  borderTop = false,
  children,
  ...props
}: SectionBorderProps) => {
  return (
    <div
      className={twMerge(
        "border-l border-r border-[var(--color-border)] relative",
        borderTop && "border-t",
        className
      )}
      {...props}
    >
      {borderTop && (
        <>
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200" />
          </div>
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200" />
          </div>
        </>
      )}

      {children}
    </div>
  );
};
