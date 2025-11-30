 function Button({
  onClick,
  children,
  className = '',
  variant = 'default',
  type = 'button',
  disabled = false,         
  ...rest
}) {
  const baseClasses = 'font-bold py-3 px-6 rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    default: 'bg-gray-200 text-black hover:bg-gray-300',
    primary: 'bg-yellow-500 text-white hover:bg-yellow-600',
    secondary: 'bg-sky-500 text-white hover:bg-sky-700',
  };

  const variantClasses = variants[variant] || variants.default;
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
