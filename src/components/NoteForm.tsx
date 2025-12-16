import React, { useState } from 'react';

// รับ prop onAdd ที่เป็นฟังก์ชัน
interface NoteFormProps {
  onAdd: (text: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // กันหน้าเว็บรีโหลด
    const trimmed = text.trim();
    if (trimmed) {
      onAdd(trimmed); // ส่งค่ากลับไปหา App
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
        <button type="submit" disabled={!text.trim()} aria-disabled={!text.trim()}>Add</button>
      </form>
    </div>
  )
}

export default NoteForm
