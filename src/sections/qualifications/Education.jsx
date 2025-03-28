function Education() {
  return (
    <div className="flex flex-col basis-2/5">
      <h4 className="mb-4">
        <span className="bg-firstColor text-white text-sm font-medium px-3 py-1 rounded">
          Education
        </span>
      </h4>

      <div className="flex flex-col bg-green m-2 mt-0 py-6 px-2 rounded-md shadow-sm hover:scale-[1.03] transition">
        <span className="text-gray-300">Present</span>
        <p className="flex flex-col text-primaryText text-sm">
          <span className="font-semibold">Master of Computer Science</span> 
          Georgia Institute of Technology
        </p>
      </div>
      <div className="flex flex-col bg-yellow m-2 py-6 px-2 rounded-md shadow-sm hover:scale-[1.03] transition">
        <span className="text-gray-300">2022-2023</span>
        <p className="flex flex-col text-primaryText text-sm">
          <span className="font-semibold">Master of Technology</span> 
          University of California - Santa Barbara
        </p>
      </div>
      <div className="flex flex-col bg-red m-2 py-6 px-2 rounded-md shadow-sm hover:scale-[1.03] transition">
        <span className="text-gray-300">2018-2022</span>
        <p className="flex flex-col text-primaryText text-sm">
          <span className="font-semibold">Bachelor of Computer Science</span> 
          Eötvös Loránd University, Hungary
        </p>
      </div>
    </div>
  );
}

export default Education;
