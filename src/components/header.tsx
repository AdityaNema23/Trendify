import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "sas", role: "admin" };
const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav className="header">
      <Link onClick={() => setIsopen(false)} to={"/"}>
        Home
      </Link>
      <Link onClick={() => setIsopen(false)} to={"/search"}>
        <FaSearch />
      </Link>

      <Link onClick={() => setIsopen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={() => setIsopen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link onClick={() => setIsopen(false)} to="/admin/dashboard">Admin</Link>
              )}
              <Link onClick={() => setIsopen(false)} to="/orders">Orders</Link>
              <button>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
