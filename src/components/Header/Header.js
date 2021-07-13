import classes from "./Header.module.css";
import { FaMoon } from "react-icons/fa";

const Header = ({ handleToggleDarkMode }) => {
  const handleToggle = () => {
    handleToggleDarkMode((previousDarkMode) => !previousDarkMode);
  };

  return (
    <div className={classes.header}>
      <h1>NotesApp</h1>
      <FaMoon
        size="30"
        fill="#e1e1e1"
        className={classes.toggle}
        onClick={handleToggle}
      />
    </div>
  );
};

export default Header;
