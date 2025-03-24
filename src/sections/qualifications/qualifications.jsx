import Education from "./Education";
import Languages from "./Languages";
import Frontend from "./Frontend";
import Backend from "./Backend";
function Qualifications() {
  return (
    <div className="flex flex-col gap-y-4 bg-background p-3.5 rounded-2xl mx-6 mb-8 md:col-span-12 lg:mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-primaryText">Skills</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <Education />
        <Languages />
        <Frontend />
        <Backend />
      </div>
    </div>
  );
}

export default Qualifications;
