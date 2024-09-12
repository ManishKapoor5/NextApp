function NavbarPage() {
  return (
    <div className="bg-blue-800 p-5 text-white flex flex-row justify-evenly items-baseline">
      <div className="font-bold text-4xl">Imeleo</div>
      <div>Solutions</div>
      <div>Services</div>
      <div>Why us</div>
      <div>Blog</div>

      <input
        className="rounded-3xl w-56 h-10 px-12"
        type="search"
        placeholder="Search"
      />
    </div>
  );
}

export default NavbarPage;
