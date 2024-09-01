import { createBrowserRouter } from "react-router-dom"
import Swap from "./components/Swap/Swap"
import History from "./components/History/History"
import Settings from "./components/Settings/Settings"
import Layout from "./layout"

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