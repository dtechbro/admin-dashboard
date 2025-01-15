import NewCardBtn from "./components/NewCardBtn";
import Sidebar from "./components/Sidebar";

export default function App() {
  const navLinks = [
    { name: "Referrals", href: "/" },
    { name: "Orders", href: "/orders" },
    { name: "Patterns", href: "/patterns" },
  ];
  return (
    <main className="flex">
      <Sidebar />

      <main className="w-full ">
        <div className="w-full flex justify-between py-3 items-center px-5">
          <h2 className="font-semibold text-lg">Signature Card&apos;s Admin</h2>

          <nav>
            <ul className="flex gap-5">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <NewCardBtn />
          </div>
        </div>


      </main>
    </main>
  );
}
