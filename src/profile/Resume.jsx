import cv from "@/assets/cv.pdf";
function Resume() {
  return (
    <div className="flex flex-col gap-y-4 bg-background mx-6 p-3.5 rounded-2xl mt-6 mb-8 md:col-span-12 md:flex-row md:gap-x-8 md:justify-between md:items-center lg:col-span-6 lg:flex-col lg:items-stretch">
      <p className="text-primaryText text-xl font-bold text-center leading-10 lg:text-3xl">
        Download my resume to learn more about me
      </p>

      <a
        href={cv}
        download="Annika_Resume.pdf"
        className="md:flex-1"
      >
        <button className="w-full bg-firstColor p-2 text-primaryText font-semibold rounded-xl hover:bg-firstColor_light transition-all duration-300 flex justify-center items-center gap-2">
          <i className="bx bx-download" />
          <span>Download CV</span>
        </button>
      </a>
    </div>
  );
}
export default Resume;
