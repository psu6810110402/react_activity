import { useState } from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import type { Note } from './types'

function App() {
  // State เก็บรายการโน้ต
  const [notes, setNotes] = useState<Note[]>([]);

  // ฟังก์ชันเพิ่มโน้ต
  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text,
    };
    setNotes([...notes, newNote]);
  }

  return (
    <div>
      <h1>Sticky Notes</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} />
    </div>
  )
}

export default App
