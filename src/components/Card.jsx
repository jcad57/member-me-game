function Card({ content, flipped, onClick, matched }) {
  const cardStyle = {
    backgroundColor: flipped || matched ? `#${content}` : "grey",
  };
  return <div className="grid-square" style={cardStyle} onClick={onClick}></div>;
}

export default Card;
