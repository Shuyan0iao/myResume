import project1 from "@/assets/project1.png";
function Portfolio() {
  return (
    <div className="flex flex-col gap-y-6 mx-6 mb-8 bg-background p-3.5 rounded-2xl md:col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:mb-0">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-primaryText">My Portfolio</h3>
        <a
          href="#"
          className="text-xl text-gray-300 hover:text-primaryText transition-all duration-300"
        >
          See All
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="group relative lg:h-full">
          <img
            className="rounded-2xl object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-40 h-full"
            src={project1}
            alt="First Portfolio Image"
          />
          <a
            href="#"
            className="absolute inset-0 items-center justify-center font-semibold text-primaryText hidden group-hover:flex"
          >
            See Project
          </a>

        </div>
        <div className="group relative lg:h-full">
          <img
            className="rounded-2xl object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-40 h-full"
            src={project1}
            alt="First Portfolio Image"
          />
          <a
            href="#"
            className="absolute inset-0 items-center justify-center font-semibold text-primaryText hidden group-hover:flex"
          >
            See Project
          </a>
          
        </div>
        <div className="group relative lg:h-full">
          <img
            className="rounded-2xl object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-40 h-full"
            src={project1}
            alt="First Portfolio Image"
          />
          <a
            href="#"
            className="absolute inset-0 items-center justify-center font-semibold text-primaryText hidden group-hover:flex"
          >
            See Project
          </a>
          
        </div>
        <div className="group relative lg:h-full">
          <img
            className="rounded-2xl object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-40 h-full"
            src={project1}
            alt="First Portfolio Image"
          />
          <a
            href="#"
            className="absolute inset-0 items-center justify-center font-semibold text-primaryText hidden group-hover:flex"
          >
            See Project
          </a>
          
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
