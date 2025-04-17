import { IRoutePath } from "./types";

enum enumPath {
  home = "home",
  constructor = "constructor",
  stats = "stats",
}

export const RoutePath: Record<enumPath, IRoutePath> = {
  [enumPath.home]: {
    fullPath: "/home",
    name: "Главная",
    path: "/home",
  },
  [enumPath.constructor]: {
    fullPath: "/constructor",
    path: "/home",
  },
  [enumPath.stats]: {
    fullPath: "/stats",
    name: "Статистика",
    path: "/stats",
  },
};
