import { useState, useEffect } from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import type { Note } from './types'

function App() {
  // State เก็บรายการโน้ต (ใช้ Lazy Initialization เพื่อโหลดจาก Local Storage ทันที)
  // ช่วยแก้ปัญหาข้อมูลกระพริบตอนกด Refresh
  const [notes, setNotes] = useState<Note[]>(() => {
    try {
      const saved = localStorage.getItem('notes');
      return saved ? (JSON.parse(saved) as Note[]) : [];
    } catch (err) {
      // ถ้า parse ผิดพลาด ให้คืนค่าเริ่มต้นเป็น Array ว่าง
      return [];
    }
  });

  // ลบ useEffect ตัวโหลดข้อมูลออกไปแล้ว (เพราะย้ายไปทำใน useState แทน)

  // บันทึกข้อมูลลง Local Storage ทุกครั้งที่ notes เปลี่ยน
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes)); // แปลง Array เป็น JSON string
  }, [notes]); // ทำงานเมื่อ notes มีการเปลี่ยนแปลง

  // ฟังก์ชันเพิ่มโน้ต
  const addNote = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return; // หยุดหากข้อความว่างเปล่า

    const newNote: Note = {
      id: Date.now(),
      text: trimmed,
    };
    setNotes(prev => [...prev, newNote]);
  }

  // ฟังก์ชันลบโน้ต
  const deleteNote = (id: number) => {
    // กรองเอาเฉพาะโน้ตที่ id ไม่ตรงกับที่ส่งมา (ลบตัวที่ id ตรงกันออก)
    setNotes(prev => prev.filter((note) => note.id !== id));
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
