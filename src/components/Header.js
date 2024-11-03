import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary-900 text-secondary-100 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Yash Shrivastava</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blog">Blog </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
