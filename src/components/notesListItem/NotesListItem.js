const NotesListItem = ({arrText}) => {
  return arrText.map((item, i) => <li key={i} className="notes__list_item">{item}</li>)
}

export default NotesListItem;