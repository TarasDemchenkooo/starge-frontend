import { ReactNode } from "react"
import Menu from "./modules/Menu/Menu"

interface ILayout {
    children: ReactNode
}

export default function Layout({ children }: ILayout) {
    return (
        <>
            <main>
                {children}
            </main>
            <footer>
                <Menu />
            </footer>
        </>
    )
}