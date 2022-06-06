import About from "../components/About";
import { Hola } from "../components/Hola";

interface Route {
  path: string;
  component:
    | string
    | React.FunctionComponent<unknown>
    | React.ComponentClass<unknown, unknown>;
}

const RoutesComponent: Route[] = [
  {
    path: "/",
    component: Hola,
  },
  {
    path: "/about",
    component: About,
  },
];

export default RoutesComponent;
