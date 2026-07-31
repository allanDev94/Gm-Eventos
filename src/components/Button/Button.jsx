import { Link } from "react-router-dom";

import "./Button.css";

function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}) {
  const buttonClasses = `button button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={buttonClasses} to={to} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={buttonClasses} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} type={type} {...rest}>
      {children}
    </button>
  );
}

export default Button;
