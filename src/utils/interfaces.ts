import { ReactNode } from "react";

interface Ichildren {
  children: ReactNode;
}

interface InavList {
  label: string;
  scrollSectionId?: string;
}

export type { Ichildren, InavList };
