import { RouteProps } from "react-router-dom";

import { AppRoutes, getRouteHome, getRouteNotFound } from "../constants/router";

// ----- Pages -----
import { Home, NotFound } from "../pages";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.NOT_FOUND]: {
    path: getRouteHome(),
    element: <Home />,
  },

  [AppRoutes.HOME]: {
    path: getRouteNotFound(),
    element: <NotFound />,
  },
};
