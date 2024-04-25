import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export default function NetworkErrorCard() {
  return (
    <Card>
      <CardHeader className="flex items-center space-x-6">
        <WifiOffIcon className="h-16 w-16" />
      </CardHeader>
      <CardContent>
        <p className="mt-2">No estás conectado a internet.</p>
      </CardContent>
    </Card>
  );
}

function WifiOffIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="2" x2="22" y1="2" y2="22" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
      <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76" />
      <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" />
      <path d="M5 13a10 10 0 0 1 5.24-2.76" />
      <line x1="12" x2="12.01" y1="20" y2="20" />
    </svg>
  );
}
