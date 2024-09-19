import NavbarBottom from "./navbarBottom"
import NavbarTop from "./navbarTop"

const Navbar = () => {
    return (
        <div className="flex flex-col">
            <NavbarTop />
            <NavbarBottom />
        </div>
    )
}

export default Navbar