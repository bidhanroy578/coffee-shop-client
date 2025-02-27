import { Outlet } from "react-router"
import Header from "./components/header/Header"
import Footer from "./components/header/Footer"

function App() {

    return (
        <div className="font-raleway">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App
