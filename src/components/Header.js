import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-primary-900 text-secondary-100 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="invert-0 dark:invert">
            <Image
              src="/images/logo.png"
              alt="Yash Shrivastava Logo"
              width={100}
              height={50}
              style={{ filter: "invert(1)" }}
            />
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">About </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
