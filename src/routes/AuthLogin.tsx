import Login from "../authenication/auth/login";
import AuthGuest from "../utils/AuthGuand/AuthGuest";

const AuthLogin = {
    path: "/",
    element: (
        <AuthGuest>
            <Login />
        </AuthGuest>

    ),
    children: [
        {
            path: "/login",
            element: <Login />
        },
    ]
}
export default AuthLogin;