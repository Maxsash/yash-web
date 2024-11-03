import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-row items-center space-x-2 p-2 md:p-4 border border-gray-200 rounded-lg">
              <p className="text-primary-600 text-sm w-[70px] tabular-nums opacity-75">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-primary-900 font-semibold tracking-tight leading-snug md:leading-normal md:text-lg">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
