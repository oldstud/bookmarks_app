export interface RouteI { 
    children: JSX.Element;
    restricted?: boolean;
    redirectTo: string;
}