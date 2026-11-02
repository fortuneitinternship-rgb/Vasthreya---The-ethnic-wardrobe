
function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`vasthreya-btn ${
        size !== "medium" ? `btn-${size}` : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
