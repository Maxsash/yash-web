const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <a>Yash Shrivastava</a>
        </div>
        <ul className="flex space-x-4">
          <li>Blog</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
