"use client"; // Solo si lo separás en archivo

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { isFavorite, toggleFavorite } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface FavoriteBadgeProps {
  productId: string;
}

const FavoriteBadge = ({ productId }: FavoriteBadgeProps) => {
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    setFavorito(isFavorite(productId));
  }, [productId]);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleFavorite(productId);
    setFavorito(!favorito);
  };

  return (
    <Badge
      onClick={handleToggle}
      className={`absolute rounded-full size-8 top-4 right-4 bg-white hover:scale-105 hover:transition-all hover:duration-200 `}
    >
      <Heart
        size={30}
        color={favorito ? "red" : "black"}
        fill={favorito ? "red" : "none"}
        className={`transition-transform duration-200 ${favorito ? "scale-110" : "scale-100"}`}
      />
    </Badge>
  );
};

export default FavoriteBadge;
