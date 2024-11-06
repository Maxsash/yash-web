export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col sm:flex-row items-start gap-8 sm:gap-16 max-w-4xl mx-auto px-4">
        <div className="text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary-900 mb-5">
            Hey, I am Yash!
          </h1>
          <p className="text-primary-600 text-lg">
            I am a software developer with 3 years of working
            experience, currently working full time. Have used various distros
            of Linux for about a decade before switching to Windows/Mac
            environment since I wanted more stability and with Linux I was
            always up to something and breaking stuff which hindered my actual
            work.
          </p>
          <div className="flex mt-4 space-x-4 pt-5">
            <a
              href="https://github.com/maxsash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-900 hover:text-primary-700"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/maxsash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-900 hover:text-primary-700"
            >
              LinkedIn
            </a>
            <a
              href="https://stackexchange.com/users/7723598/maxsash?tab=accounts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-900 hover:text-primary-700"
            >
              Stack Exchange
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
