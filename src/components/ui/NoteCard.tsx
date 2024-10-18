import { Archive, Trash } from "lucide-react";
import { showFormattedDate } from "../../utils";
import Button from "./Button";

interface NoteCardProps {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  isArchive: boolean;
  handleDelete: (id: number) => void;
}

const NoteCard = ({
  id,
  title,
  body,
  createdAt,
  isArchive,
  handleDelete,
}: NoteCardProps) => {
  return (
    <article className="grow max-w-60 flex flex-col justify-between gap-4 border bg-white rounded-xl p-2 text-pretty">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium text-balance">{title}</h3>
            <div className="text-sm text-neutral-500">
              {showFormattedDate(createdAt)}
            </div>
          </div>
          <Button iconOnly>
            <Archive size={20} />
          </Button>
        </div>
        <p className="mt-2 h-auto">{body}</p>
      </div>
      <div className="w-full flex justify-end">
        <Button type="danger" onClick={() => handleDelete(id)}>
          <Trash size={20} /> Remove
        </Button>
      </div>
    </article>
  );
};

export default NoteCard;
