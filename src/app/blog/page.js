import { BlogPosts } from "@/components/Posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 tracking-tight text-gray-800">
        My Blog
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to my blog! Here you&apos;ll find articles on various topics. Enjoy
        reading!
      </p>
      <div className="grid gap-6">
        <BlogPosts />
      </div>
    </section>
  );
}
