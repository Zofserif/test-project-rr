import { SignedIn, SignedOut } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <img src={image.url} className="flex flex-wrap gap-4" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <TopNav />
      <SignedOut> Please sign in to view images </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
