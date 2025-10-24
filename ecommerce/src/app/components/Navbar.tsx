
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

const NavBar = ()=> {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/globe.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-sky-500 dark:text-white">Schola</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/accueil">
          Accueil
        </NavbarLink>
        <NavbarLink as={Link} href="/courses">
            Courses
        </NavbarLink>
                <NavbarLink as={Link} href="/students">
            Students
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavBar