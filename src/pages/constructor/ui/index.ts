import { lazy } from "react";

export const ConstructorPageLazy = lazy(async () => await import("./Constructor.page"));
