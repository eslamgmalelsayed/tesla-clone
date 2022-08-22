import NavLogo from "../navLogo.jsx/navLogo"
import NavLinks from "../navLinks/navLinks"
// imports
// comp start
const NavBar = ({toggle, setToggle}) => {
    // toggle nav
    const toggleNavBar = () => {
        setToggle(!toggle)
    }
    return (
        <>
        {/* main nav bar */}
        <nav className="flex flex-row flex-nowrap justify-between items-center font-semibold">
            {/* logo */}
           <NavLogo />
           {/* links */}
           <NavLinks />
            <div className="lg:block hidden space-x-4">
                <a className="hover:bg-slate-200 py-1 px-2 rounded-lg ease-in duration-200" href="#">Shop</a>
                <a className="hover:bg-slate-200 py-1 px-2 rounded-lg ease-in duration-200" href="#">Account</a>
                <a className="hover:bg-slate-200 py-1 px-2 rounded-lg ease-in duration-200" href="#">Menu</a>
            </div>
            <div className="lg:hidden bg-gray-200 px-4 py-1 rounded-lg">
                <a onClick={toggleNavBar} href="#">menu</a>
            </div>
        </nav>
        </>
    )
}
export default NavBar