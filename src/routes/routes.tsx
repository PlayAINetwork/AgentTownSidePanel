import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/app.layout";
import ErrorBoundary from "../components/ErrorBoundary";
import { ROUTES } from "./router";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: ROUTES.nodes.global,
                element: <Home />,
            },
            // {
            //     path: ROUTES.nodes.personal,
            //     element: (
            //         <AuthorizedRoute>
            //             <Keys />
            //         </AuthorizedRoute>
            //     ),
            // },
           
        ],
    },
]);

export default router;