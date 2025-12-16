import type { Note } from '../types';

// รับ prop notes และ onDelete
interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NoteList = ({ notes, onDelete }: NoteListProps) => {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          {note.text}
          {/* ปุ่มลบ เรียกฟังก์ชัน onDelete ส่ง id ไป */}
          <button onClick={() => onDelete(note.id)} style={{ marginLeft: '10px', background: 'red' }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default NoteList
