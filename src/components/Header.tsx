import ToggleTheme from "./ToggleTheme";

function Header() {
  
  return (
    <header className="bg-purple-900 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">
       Personal React Boilerplate
        </div>
        <div>
        <ToggleTheme/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
