import NotesListItem from '../notesListItem/NotesListItem';

import './notesList.scss';


const NotesList = (props) => {
  return (
    <div>
      <h3 className="notes__title">Примечания:</h3>
      <ul className="notes__list">
        <NotesListItem arrText={props.notes_1}/>
      </ul>
    </div>
  )
}

export default NotesList