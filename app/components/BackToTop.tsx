"use client";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;
  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-10 right-10 rounded-full size-14 text-2xl bg-main text-white shadow-lg hover:bg-main/80 z-50 cursor-pointer"
      aria-label="Volver al inicio"
      variant="default"
    >
      <ArrowUp strokeWidth={4} />
    </Button>
  );
};
export default BackToTop;
