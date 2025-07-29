"use client";
import { registerSw } from "@/utils/registerSw";
import { useEffect } from "react";

export const InitSw = () => {
  useEffect(() => {
    registerSw();
  }, []);

  return null;
};
