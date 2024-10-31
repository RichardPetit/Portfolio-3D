import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-120 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md px-4">
            <p className="blue-gradient_text">Accueil</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Présentation
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Projets
            </NavLink>
            {/* <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Contact
            </NavLink> */}
        </nav>
    </header>
  )
}

export default Navbar