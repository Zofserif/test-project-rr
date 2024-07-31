import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  return (
    <nav className="flex w-full border-collapse items-center justify-between text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader" />
          <SignOutButton />
        </SignedIn>
      </div>
    </nav>
  );
}
