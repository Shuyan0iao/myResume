import { useNavigate } from 'react-router-dom';
import project1 from "@/assets/project1/1.jpg";
import project2 from '@/assets/project2/1.png';
import project3 from '@/assets/project3/1.png';
import project4 from '@/assets/project4/4.png';
function Projects() {
  const navigate = useNavigate();
  const projectImages = [project1, project2, project3, project4];
  return (
    <div className="flex flex-col gap-y-6 mx-6 mb-8 bg-background p-3.5 rounded-2xl md:col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:mb-0">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-primaryText">My Portfolio</h3>
        
        {/* ✅ 点击跳转到 portfolio 首页 */}
        <button
          onClick={() => navigate('/portfolio')}
          className="text-xl text-firstColor hover:text-firstColor_light transition-all duration-300"
        >
          See All
        </button>
      </div>

      {/* ✅ 多图项目展示 */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {projectImages.map((img, idx) => (
          <div key={idx} className="group relative lg:h-full">
            <img
              className="rounded-2xl object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-40 h-full"
              src={img}
              alt={`Project ${idx + 1}`}
            />
            <button
              onClick={() => navigate(`/portfolio/${idx + 1}`)}
              className="absolute inset-0 items-center justify-center font-semibold text-primaryText hidden group-hover:flex"
            >
              See Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
