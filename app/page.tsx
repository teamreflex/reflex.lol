import { BlogPosts } from "app/components/posts";
import ProjectList from "./components/projects";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">reflex</h1>

      <ProjectList />

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
