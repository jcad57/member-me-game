function Bonuses({ state }) {
  console.log(state.message)
  return (
    <div className="bonuses-container">
      {state.message.text.map((message) => (
        <p key={state.message.eventCount} className="message flash-text move-up-and-fade">
          {message}
        </p>
      ))}
    </div>
  );
}

export default Bonuses;
