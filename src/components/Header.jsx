import { useSelector, useDispatch } from "react-redux";
import { itemSearch } from "../redux/itemAction";

const Header = () => {
  const result = useSelector((state) => state.itemData);
  const dispatch = useDispatch();
  console.warn("data in header", result);
  return (
    <div className="header">
      <div className="search-box">
        <input
          type="text"
          onChange={(event) => dispatch(itemSearch(event.target.value))}
          placeholder="search item"
        />
      </div>

      <div className="cart-div">
        <span>{result.length}</span>
        <img
          src="https://www.svgrepo.com/show/452092/react.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
