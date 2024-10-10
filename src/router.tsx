import Swap from "./pages/Swap/components/Swap"
import History from "./pages/History/components/History"
import Settings from "./pages/Settings/components/Settings"
import Layout from "./layout"
import { createBrowserRouter } from "react-router-dom"

export default createBrowserRouter([
    {
        path: '/',
        element: <Layout children={<Swap />} />
    },
    {
        path: '/history',
        element: <Layout children={<History />} />
    },
    {
        path: '/settings',
        element: <Layout children={<Settings />} />
    },
])