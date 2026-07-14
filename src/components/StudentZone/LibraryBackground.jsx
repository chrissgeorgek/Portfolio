const LibraryBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
  
        {/* Wall */}
        <div className="absolute inset-0 bg-[#FFF6E8]" />
  
        {/* Top Wall Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F0] via-[#FFF3DE] to-[#F8E8CC]" />
  
        {/* Sunlight */}
        <div
          className="
            absolute
            left-20
            top-0
            h-[500px]
            w-[280px]
            bg-yellow-100/40
            blur-3xl
            rotate-12
          "
        />
  
        <div
          className="
            absolute
            right-20
            top-0
            h-[500px]
            w-[280px]
            bg-yellow-100/40
            blur-3xl
            -rotate-12
          "
        />
  
        {/* Left Window */}
        <div className="absolute left-16 top-20 h-64 w-40 rounded-xl border-8 border-[#9B6B43] bg-sky-200 shadow-lg">
  
          <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-[#9B6B43]" />
  
          <div className="absolute top-1/2 left-0 h-2 w-full -translate-y-1/2 bg-[#9B6B43]" />
  
        </div>
  
        {/* Right Window */}
        <div className="absolute right-16 top-20 h-64 w-40 rounded-xl border-8 border-[#9B6B43] bg-sky-200 shadow-lg">
  
          <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-[#9B6B43]" />
  
          <div className="absolute top-1/2 left-0 h-2 w-full -translate-y-1/2 bg-[#9B6B43]" />
  
        </div>
  
        {/* Floor */}
        <div
          className="
            absolute
            bottom-0
            h-40
            w-full
            bg-gradient-to-b
            from-[#C7925A]
            to-[#9E6739]
          "
        />
  
      </div>
    );
  };
  
  export default LibraryBackground;