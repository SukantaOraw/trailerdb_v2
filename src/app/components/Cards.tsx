"use client";

import { MovieCardProps } from "@/app/types/type";
import { Card, Button } from "@heroui/react";

type CardProps = {
  cards: MovieCardProps[];
};

export default function Cards({ cards }: CardProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {cards.map((card) => (
        <Card key={card.title} variant="secondary" className="w-40 p-3">
          <Card.Header>
            <Card.Title className="text-sm">{card.title}</Card.Title>
          </Card.Header>

          <Card.Content>
            <Card.Description className="text-xs">
              Year: {card.year}
            </Card.Description>

            <Card.Description className="text-xs">
              Rating: ⭐ {card.rating}
            </Card.Description>

            <Card.Description className="text-xs">
              {card.genre.join(", ")}
            </Card.Description>
          </Card.Content>

          <Card.Footer className="mt-2">
            <Button
              size="sm"
              variant="outline"
              fullWidth
              onPress={() => console.log(card.title)}
            >
              See More
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}
