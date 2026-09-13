import { Link, NavLink } from "react-router-dom";

const links = [
  { caminho: "/", texto: "Home" },
  { caminho: "/sobre", texto: "Sobre" },
  { caminho: "/sobre-souly", texto: "Sobre Souly" },
  { caminho: "/souly-como-guia", texto: "Souly como guia" },
  { caminho: "/integrantes", texto: "Integrantes" },
  { caminho: "/faq", texto: "FAQ" },
  { caminho: "/contato", texto: "Contato" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 md:px-8 xl:flex-row xl:items-center xl:justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          aria-label="EcoPulse - página inicial"
          className="flex w-fit items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        >
          <img
            src="/images/headerIcon.png"
            alt=""
            className="h-11 w-11 rounded-full"
          />
          <span>
            <span className="block text-xl font-bold tracking-tight text-teal-950">
              EcoPulse<span className="text-teal-600">.</span>
            </span>
            <span className="block text-xs tracking-wide text-slate-500">
              TECNOLOGIA COM PROPÓSITO
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap gap-1">
            {links.map((link) => (
              <li key={link.caminho}>
                <NavLink
                  to={link.caminho}
                  end
                  onClick={() => window.scrollTo(0, 0)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                      isActive
                        ? "bg-teal-800 text-white"
                        : "text-slate-600 hover:bg-teal-50 hover:text-teal-900"
                    }`
                  }
                >
                  {link.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
