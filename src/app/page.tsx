import { db } from "~/server/db";

export default async function HomePage() {
  // let posts = [];
  // try {
  //   posts = await db.query.posts.findMany();
  // } catch (error) {
  //   console.error("Failed to fetch posts:", error);
  //   return (
  //     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
  //       <div>Error loading posts. Please try again later.</div>
  //     </main>
  //   );
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {/* {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))} */}
    </main>
  );
}
