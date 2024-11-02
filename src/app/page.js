export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col sm:flex-row items-start gap-8 sm:gap-16 max-w-4xl mx-auto px-4">
        <div className="text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-2">
            Hey, I am Yash!
          </h1>
          <p className="text-gray-600 text-lg">
            I am currently a full-time Web Developer at{" "}
            <span className="font-semibold">NimbleWork Inc., Mumbai</span>. I
            like trying out anything and everything, and I built this place to
            keep track and showcase my doings.
          </p>
        </div>
      </main>
    </div>
  );
}
