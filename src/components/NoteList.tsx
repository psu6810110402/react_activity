import type { Note } from '../types';

// รับ prop notes ที่เป็น Array ของ Note
interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          {note.text}
        </div>
      ))}
    </div>
  )
}

export default NoteList
