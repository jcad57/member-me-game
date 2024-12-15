function Card({ content, flipped, onClick, matched }) {
  const cardStyle =
    flipped || matched
      ? {
          backgroundColor: `#${content}`,
        }
      : {
          backgroundColor: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        };
  return (
    <div className="grid-square" style={cardStyle} onClick={onClick}>
      {!flipped && !matched && "Mm"}
    </div>
  );
}

export default Card;
