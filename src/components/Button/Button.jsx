import "./Button.css";

function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const buttonClassName = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={buttonClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;