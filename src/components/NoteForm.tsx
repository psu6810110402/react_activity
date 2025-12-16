import React, { useState } from 'react';

// รับ prop onAdd ที่เป็นฟังก์ชัน
interface NoteFormProps {
  onAdd: (text: string) => void;
}

const NoteForm = ({ onAdd }: NoteFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // กันหน้าเว็บรีโหลด
    if (text.trim()) {
      onAdd(text); // ส่งค่ากลับไปหา App
      setText('');
    }
  };

  // ระบุ Type ของ Event อย่างชัดเจน (Strict Event Typing)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Add a note" 
          value={text}
          onChange={handleChange} // ใช้ handle function ที่ระบุ type ชัดเจน
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NoteForm
