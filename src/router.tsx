import { createBrowserRouter } from "react-router-dom";
import { GeneralPage, ErrorPage, MainPage, HelpPage, LoginPage } from "./routes"


const router = createBrowserRouter([
    {
        path: "/",
        element: <GeneralPage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "main",
                element: <MainPage/>
            },
            {
                path: "help",
                element: <HelpPage/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
        ]
    }
])
export default router;