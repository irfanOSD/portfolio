function Button({ href, variant = "primary", download = false, children }) {
  return (
    <a
      href={href}
      className={`btn btn--${variant}`}
      download={download || undefined}
    >
      {children}
    </a>
  );
}

export default Button;