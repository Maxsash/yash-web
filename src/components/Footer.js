import Image from "next/image";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://maxsash.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to maxsash.com →
      </a>
    </footer>
  );
};

export default Footer;
