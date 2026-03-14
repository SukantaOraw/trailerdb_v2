"use client";

import { Networks } from "../types/types";
import { TMDB_LOGO } from "@/lib/constants/tmdb.constants";
import { Card, CardContent } from "@/components/ui/card";

type NetworkProps = {
  networks: Networks[];
};

export default function NetworkCards({ networks }: NetworkProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {networks.map((network) => (
        <Card
          key={network.id}
          className="w-32 h-20 flex-shrink-0 flex items-center justify-center"
        >
          <CardContent className="flex items-center justify-center p-2">
            <img
              src={
                network.logo_path
                  ? `${TMDB_LOGO}${network.logo_path}`
                  : "/placeholder-network.png"
              }
              alt={network.name}
              className="h-8 object-contain"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
