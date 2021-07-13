import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";
import classes from "./NoteList.module.css";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className={classes.notesList}>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
