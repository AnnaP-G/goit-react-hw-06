import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchBox}>
      <h2 className={css.searchBoxTitle}>Find contacts by name</h2>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
