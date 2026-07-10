export default function Container({ children, className = "" }) {
    return (
      <section
        className={`max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10 ${className}`}
      >
        {children}
      </section>
    );
  }