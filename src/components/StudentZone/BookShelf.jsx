import BookCard from "./BookCard";

const BookShelf = ({
  projects,
  onProjectClick,
}) => {
  return (
    <div className="space-y-20">

      {/* Shelf 1 */}

      <div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-3 lg:grid-cols-5">

          {projects.slice(0, 5).map((project) => (

            <BookCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
            />

          ))}

        </div>

        <div className="relative mt-2">
          <div className="h-5 rounded-md bg-gradient-to-r from-[#8B5A2B] via-[#B67C4A] to-[#8B5A2B] shadow-xl" />
          <div className="h-2 rounded-b-md bg-[#6B4226]" />
        </div>

      </div>

      {/* Shelf 2 */}

      {projects.length > 5 && (

        <div>

<div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5
    gap-6
    md:gap-8
  "
>

            {projects.slice(5).map((project) => (

              <BookCard
                key={project.id}
                project={project}
                onClick={onProjectClick}
              />

            ))}

          </div>

          <div className="relative mt-2">
            <div className="h-5 rounded-md bg-gradient-to-r from-[#8B5A2B] via-[#B67C4A] to-[#8B5A2B] shadow-xl" />
            <div className="h-2 rounded-b-md bg-[#6B4226]" />
          </div>

        </div>

      )}

    </div>
  );
};

export default BookShelf;