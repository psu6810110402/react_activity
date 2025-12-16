import './App.css'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

function App() {
  return (
    <div>
      <h1>Sticky Notes</h1>
      <NoteForm />
      <NoteList />
    </div>
  )
}

export default App
