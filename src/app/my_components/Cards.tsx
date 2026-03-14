"use client";

import { MovieCardProps } from "../types/types";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

type CardProps = {
  cards: MovieCardProps[];
};

export default function Cards({ cards }: CardProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {cards.map((card) => (
        <Card key={card.title} className="w-44 flex-shrink-0">
          <CardHeader>
            <CardTitle className="text-sm">{card.title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-1">
            <CardDescription className="text-xs">
              Year: {card.year}
            </CardDescription>

            <CardDescription className="text-xs">
              Rating: ⭐ {card.rating}
            </CardDescription>

            <CardDescription className="text-xs">
              {card.genre.join(", ")}
            </CardDescription>
          </CardContent>

          <CardFooter>
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              onClick={() => console.log(card.title)}
            >
              See More
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
