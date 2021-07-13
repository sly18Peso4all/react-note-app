import classes from "./Search.module.css";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  const handleSearchInput = (e) => {
    handleSearchNote(e.target.value);
  };

  return (
    <div className={classes.search}>
      <MdSearch size="25" fill="#000" className={classes.searchIcon} />
      <input
        type="text"
        placeholder="search note"
        onChange={handleSearchInput}
      />
    </div>
  );
};

export default Search;
