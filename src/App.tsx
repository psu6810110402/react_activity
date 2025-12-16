import { useState, useEffect } from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import type { Note } from './types'

function App() {
  // State เก็บรายการโน้ต (ใช้ Lazy Initialization เพื่อโหลดจาก Local Storage ทันที)
  // ช่วยแก้ปัญหาข้อมูลกระพริบตอนกด Refresh
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('notes');
    if (saved) {
      return JSON.parse(saved) as Note[];
    }
    return []; // ถ้าไม่มีข้อมูล ให้เริ่มด้วย Array ว่าง
  });

  // ลบ useEffect ตัวโหลดข้อมูลออกไปแล้ว (เพราะย้ายไปทำใน useState แทน)

  // บันทึกข้อมูลลง Local Storage ทุกครั้งที่ notes เปลี่ยน
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes)); // แปลง Array เป็น JSON string
  }, [notes]); // ทำงานเมื่อ notes มีการเปลี่ยนแปลง

  // ฟังก์ชันเพิ่มโน้ต
  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text,
    };
    setNotes([...notes, newNote]);
  }

  // ฟังก์ชันลบโน้ต
  const deleteNote = (id: number) => {
    // กรองเอาเฉพาะโน้ตที่ id ไม่ตรงกับที่ส่งมา (ลบตัวที่ id ตรงกันออก)
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h1>Sticky Notes</h1>
      <NoteForm onAdd={addNote} />
      {/* ส่ง notes และฟังก์ชันลบไปให้ NoteList */}
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  )
}

export default App
