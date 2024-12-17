function Bonuses({ state }) {
  return (
    <div className="bonuses-container">
      {state.message.map((message) => (
        <p key={message} className="message flash-text move-up-and-fade">
          {message}
        </p>
      ))}
    </div>
  );
}

export default Bonuses;
