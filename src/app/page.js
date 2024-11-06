import { BlogPosts } from "@/components/Posts";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 tracking-tight text-primary-800">
        What I Learned
      </h1>
      <p className="text-lg text-secondary-600 mb-8">
        My learnings navigating software development and other hobbies.
      </p>
      <div className="grid gap-6">
        <BlogPosts />
      </div>
    </section>
  );
}
