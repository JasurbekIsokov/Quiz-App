export enum AppRoutes {
  HOME = "HOME",
  NOT_FOUND = "NOT_FOUND",
}

// ----- Get Routes -----

export const getRouteHome = () => "/";
export const getRouteNotFound = () => "/*";

// ----- -----
export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteHome()]: AppRoutes.HOME,
  [getRouteNotFound()]: AppRoutes.NOT_FOUND,
};
