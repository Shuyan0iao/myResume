function ExperienceDetail({ title, company, year, description, onLearnMore }) {
  return (
    <div className="bg-zinc-800 rounded-lg shadow-md p-6 relative hover:scale-[1.03] transition">
      <div className="mb-3">
        <h3 className="text-xl font-semibold text-primaryText">{title}</h3>
        <h5 className="text-sm italic text-zinc-500 dark:text-zinc-400">
          {company}
        </h5>
        <span className="text-xs text-zinc-400">{year}</span>
      </div>
      <hr className="my-2 border-zinc-300 dark:border-zinc-700" />
      <h4 className="text-sm font-semibold bg-firstColor text-white inline-block px-2 py-1 rounded">
        WORK
      </h4>
      <p className="text-sm mt-2 text-primaryText">{description}</p>
      <button
        onClick={onLearnMore}
        className="mt-3 inline-flex items-center text-firstColor hover:text-firstColor_dark font-semibold transition"
      >
        Learn more{" "}
        <i className="bx bx-chevrons-right ml-1 transition-transform group-hover:translate-x-2"></i>
      </button>
    </div>
  );
}

export default ExperienceDetail;
