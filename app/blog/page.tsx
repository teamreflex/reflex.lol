import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "all ramblings",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Posts</h1>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
