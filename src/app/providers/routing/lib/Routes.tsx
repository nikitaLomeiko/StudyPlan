import { ConstructorPageLazy } from "pages/constructor";
import { HomePageLazy } from "pages/home";
import { StatsPageLazy } from "pages/stats";
import { RouteProps } from "react-router-dom";
import { RoutePath } from "shared/config/routing";

export const Routes: (RouteProps)[] = [
    {
        path: '/',
        element: <HomePageLazy/>,
    },
    {
        path: RoutePath.home.path,
        element: <HomePageLazy/>,
    },
    {
        path: RoutePath.constructor.path,
        element: <ConstructorPageLazy/>,
    },
    {
        path: RoutePath.stats.path,
        element: <StatsPageLazy/>,
    },
]