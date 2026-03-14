"use client";

import { Networks } from "@/app/types/type";
import { Card } from "@heroui/react";

type NetworkProps = {
  networks: Networks[];
};

export default function NetworkCards({ networks }: NetworkProps) {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {networks.map((network) => (
        <Card
          key={network.title}
          className="w-32 h-20 flex items-center justify-center flex-shrink-0"
          variant="secondary"
        >
          <img
            src={network.img}
            alt={network.title}
            className="h-8 object-contain"
          />
        </Card>
      ))}
    </div>
  );
}
