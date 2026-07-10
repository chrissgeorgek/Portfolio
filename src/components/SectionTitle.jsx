function SectionTitle({
    badge,
    title,
    highlight,
    description,
  }) {
    return (
      <div className="text-center mb-20">
  
        <p className="uppercase tracking-[0.35em] text-blue-400 text-sm mb-4">
          {badge}
        </p>
  
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
  
          {title}
  
          {highlight && (
            <span className="text-blue-500">
              {" "}
              {highlight}
            </span>
          )}
  
        </h2>
  
        {description && (
          <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
            {description}
          </p>
        )}
  
      </div>
    );
  }
  
  export default SectionTitle;