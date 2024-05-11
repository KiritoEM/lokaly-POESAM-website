import { ReactNode } from "react";

interface Ichildren {
  children: ReactNode;
}

interface InavList {
  label: string;
  scrollSectionId?: string;
}

interface INavProvider {
  children?: ReactNode;
}

interface INavContext {
  openMenu: boolean;
  openOverlay: boolean;
  menuToogle: () => void;
  changeNav: (state: boolean) => void;
}

interface IDefaultNavContext {
  openMenu: false;
  openOverlay: false;
  menuToogle: () => null;
  changeNav: (state: boolean) => null;
}

export type {
  Ichildren,
  InavList,
  IDefaultNavContext,
  INavContext,
  INavProvider,
};
