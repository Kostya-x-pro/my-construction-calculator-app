import './notesRecods.scss';

const NotesRecods = () => {
  return (
    <div className="main__calculator-notes">
      <div className="notes__dots-wrapper">
        <span></span>
        <span></span>
      </div>
      <textarea name="calculator-notes" rows="3"></textarea>
    </div>
  )
}

export default NotesRecods;