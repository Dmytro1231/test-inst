import SearchBox from "./SearchBox";

function Header({ properties, updateProperties }) {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">Posh Properties</h1>

      <SearchBox properties={properties} updateProperties={updateProperties} />
    </header>
  );
}

export default Header;
