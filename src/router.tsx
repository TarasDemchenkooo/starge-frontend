import Swap from "./modules/Swap/Swap"
import History from "./modules/History/History"
import Settings from "./modules/Settings/Settings"
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