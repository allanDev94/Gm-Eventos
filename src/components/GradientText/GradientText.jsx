import "./GradientText.css";

function GradientText({ children, className = "" }) {
  const classes = ["gradient-text", className].filter(Boolean).join(" ");

  return <span className={classes}>{children}</span>;
}

export default GradientText;
