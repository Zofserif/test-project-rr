import { db } from "~/server/db";
import { TopNav } from "./_components/topnav";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <TopNav />
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
      <div>Test test</div>
    </main>
  );
}
