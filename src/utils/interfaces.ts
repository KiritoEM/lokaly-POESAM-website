import { ReactNode } from "react";

interface Ichildren {
  children: ReactNode;
}

interface InavList {
  label: string;
  scrollSection?: () => void;
}

export type { Ichildren, InavList };
