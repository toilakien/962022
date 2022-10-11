import { useRoutes } from "react-router-dom";
import AuthLogin from "./AuthLogin";
import MainRoute from "./MainRoute";
export default function ThemeRouters() {
    return useRoutes([AuthLogin,MainRoute]);
}
