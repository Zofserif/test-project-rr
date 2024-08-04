import { Modal } from "./modal";
import FullPageImageView from "~/components/full-page-image-view";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");
  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
