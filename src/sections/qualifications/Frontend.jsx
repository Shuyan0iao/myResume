const skills = [
  { name: "React", percent: 95 },
  { name: "Vue.js", percent: 65 },
  { name: "GraphQL/Firebase", percent: 60 },
  { name: "Next.js", percent: 60 },
  { name: "Tailwind CSS", percent: 95 }, 
    
  ];
function Frontend () {
    return (
        <div className="flex flex-col basis-1/5">
          {/* 标题 */}
          <h4 className="mb-4">
            <span className="bg-firstColor text-white text-sm font-medium px-3 py-1 rounded">
            Frontend Technologies
            </span>
          </h4>
    
          {/* 技能条 */}
          <ul className="flex flex-col gap-3">
            {skills.map((skill, idx) => (
              <li
                key={idx}
                className="bg-zinc-700 p-4 rounded-lg shadow hover:scale-[1.03] transition"
              >
                {/* 上部：名称 + 百分比 */}
                <div className="flex justify-between items-center mb-2 text-xs font-medium text-primaryText dark:text-zinc-200">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
    
                {/* 下部：进度条 */}
                <div className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded">
                  <div
                    className="h-2 bg-firstColor rounded transition-all"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Frontend;