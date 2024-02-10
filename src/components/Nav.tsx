import { NavLink } from "react-router-dom";

export const Nav = () => {
  const links = [
    { to: "/home", text: "Home" },
    { to: "/info", text: "Info" },
    { to: "/about", text: "About" },
  ];
  return (
    <nav>
      <ul className="flex gap-4 bg-slate-500 px-4 py-2 content rounded">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              className="[&.active]:text-yellow-500 font-medium"
              to={link.to}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
