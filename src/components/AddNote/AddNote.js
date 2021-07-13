import { useState } from "react";
import classes from "./AddNote.module.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  const characterLimit = 200;

  return (
    <div className={classes.addNote}>
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className={classes.footer}>
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className={classes.save} onClick={handleSaveClick}>
          {" "}
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
