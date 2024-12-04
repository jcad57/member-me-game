import { Link } from "react-router";

function Button({ type, link, onClick, children }) {
  return (
    <>
      <Link to={link}>
        <button className={`nes-btn ${type}`} onClick={onClick}>
          {children}
        </button>
      </Link>
    </>
  );
}

export default Button;
