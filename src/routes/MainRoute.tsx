import Layout from "../views/layout";
import Customer from "../views/pages/customer";
import Order from "../views/pages/order";
import OverView from "../views/pages/overview";
import Profile from "../views/pages/profile";
import TimeToLeave from "../views/pages/TimeToLeave";


const MainRoute =
{
    path: "/",
    element: (<Layout />),
    children: [
        { path: "/Home", element: <OverView /> },
        { path: "/Person", element: <Customer /> },
        { path: "/Inventory", element: <Order /> },
        { path: "/Profile", element: <Profile /> },
        { path: "/TimeToLeave", element: <TimeToLeave /> },
    ]
}
export default MainRoute;