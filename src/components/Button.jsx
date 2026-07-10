function Button({
    children,
    href,
    onClick,
  }) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        px-8
        py-4
        font-semibold
        transition
        duration-300
        hover:scale-105
        hover:shadow-xl
        hover:shadow-blue-500/30
        "
      >
        {children}
      </a>
    );
  }
  
  export default Button;