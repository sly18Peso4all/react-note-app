import classes from "./Note.module.css";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className={classes.note}>
      <span>{text}</span>
      <div className={classes.noteFooter}>
        <small>{date}</small>
        <MdDeleteForever
          className={classes.deleteIcon}
          size="30"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
