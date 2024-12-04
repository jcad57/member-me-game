function ThemeIcon({ theme, dispatch, state }) {
  const themeIconStyle = {
    backgroundColor: `#${theme[1][0]}`,
  };

  return (
    <div
      className="theme-icon"
      style={{
        backgroundColor: `#${theme[1][0]}`,
        outline: `${theme[0] === state.activeTheme ? "4px solid white" : ""}`,
      }}
      onClick={() => dispatch({ type: "CHANGE_THEME", payload: theme })}></div>
  );
}

export default ThemeIcon;
