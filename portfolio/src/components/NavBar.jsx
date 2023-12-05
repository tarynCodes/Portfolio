function NavBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      <ul className="navList">
        <li className="navBar">
          <a className="taryn"href="#header" onClick={() => scrollToSection("header")}>
            Taryn Bilsborough
          </a>
          <a className="about" href="#about" onClick={() => scrollToSection("about")}>
            About
          </a>
          <a className="projects"href="#projects" onClick={() => scrollToSection("projects")}>
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;