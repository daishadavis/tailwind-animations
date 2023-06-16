import clsx from "clsx";
import DisplayComponent from "../DisplayComponent";
import JSONDesigns from "../../util/designs.json";

type Designs = {
  [key: string]: string;
};

interface GridSectionProps {
  designs: Designs;
  type: "gradient" | "space" | "classic";
}

function GridSection({ designs, type }: GridSectionProps) {
  const renderDesigns = () => {
    return Object.entries(designs).map(([key, value]) => {
      return (
        <DisplayComponent
          key={key}
          name={key}
          animation={
            type === "space" ? `animate-${value}` : `hover:animate-${value}`
          }
          type={type}
        />
      );

      return null; // Optional: handle the case when the desired value is not found
    });
  };

  return (
    <div className="flex w-full flex-col">
      <p className="text-black capitalize text-3xl font-semibold">
        {type + "s"}
      </p>
      <p className="mt-3 text-sm text-gray-300 font-medium mb-4">
        {JSONDesigns.descriptions[type]}
      </p>
      <div className="w-full h-1 opacity-30 rounded bg-gray-300 mb-10" />
      <div
        className={clsx(
          type !== "space" && "md:grid-cols-3 lg:grid-cols-4",
          "grid gap-y-20 gap-x-6 py-18 sm:grid-cols-2"
        )}
      >
        {renderDesigns()}
      </div>
    </div>
  );
}

export default GridSection;
