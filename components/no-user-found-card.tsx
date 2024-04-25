import { Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export default function NoUserFoundCard() {
  return (
    <Card className="w-full max-w-sm mx-auto p-6 flex flex-col items-center justify-center text-center">
      <FileSearchIcon className="h-12 w-12 text-gray-400 mb-4" />
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          No se encontraron datos
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Lo sentimos, no pudimos encontrar ningún usuario que conicida con el
          parámetro de búsqueda, intenta introducir correctamente el nombre de
          usuario que intentas encontrar.
        </p>
      </div>
    </Card>
  );
}
function FileSearchIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="m9 18-1.5-1.5" />
    </svg>
  );
}
