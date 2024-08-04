import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const isANumber = Number(photoId);
  if (isNaN(isANumber)) throw new Error("Invalid photo id");

  const image = await getImage(isANumber);

  return (
    <div>
      <img src={image.url} alt="photo Image" className="w-96" />
    </div>
  );
}
