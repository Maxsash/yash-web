import { getBlogPosts } from "@/app/blog/utils";
import RSS from "rss";

export default function handler(req, res) {
  const feed = new RSS({
    title: "Yash Shrivastava's Blog",
    description: "My learnings about software and stuff",
    feed_url: "https://yashshrivastava.com/api/rss",
    site_url: "https://yashshrivastava.com",
    language: "en",
  });

  const posts = getBlogPosts();

  posts.forEach((post) => {
    feed.item({
      title: post.metadata.title,
      description: post.content,
      url: `https://yashshrivastava.com/blog/${post.slug}`,
      date: post.metadata.date,
    });
  });

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(feed.xml({ indent: true }));
}
