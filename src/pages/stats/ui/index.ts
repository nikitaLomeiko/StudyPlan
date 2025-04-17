import { lazy } from "react";

export const StatsPageLazy = lazy(async () => await import("./Stats.page"));
