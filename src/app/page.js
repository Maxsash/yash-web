export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col sm:flex-row items-start gap-8 sm:gap-16 max-w-4xl mx-auto px-4">
        <div className="text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary-900 mb-2">
            Hey, I am Yash!
          </h1>
          <p className="text-primary-600 text-lg">
            I am a curious Software Developer who is trying out new things every now and then. This blog contains my learnings and my thoughts.
          </p>
        </div>
      </main>
    </div>
  );
}
