function Stats() {
  return (
    <div className="m-6 mb-8 flex gap-x-2 md:col-span-3 md:flex-col md:gap-y-4 md:pr-6 md:m-0 lg:col-span-6 lg:flex-row lg:gap-x-4 lg:ml-0 lg:p-8">
        <div 
            className="flex flex-col items-center justify-center flex-1 p-4 text-center bg-emerald-500 text-primaryText rounded-2xl">
            <span className="text-4xl font-bold mb-2">2+</span>
            <span className="text-sm">Years Experience</span>
        </div>
        <div 
            className="flex flex-col items-center justify-center flex-1 p-4 text-center bg-amber-500 text-primaryText rounded-2xl">
            <span className="text-4xl font-bold mb-2">30+</span>
            <span className="text-sm">Projects</span>
        </div>
        <div 
            className="flex flex-col items-center justify-center flex-1 p-4 text-center bg-red-500 text-primaryText rounded-2xl">
            <span className="text-4xl font-bold mb-2">??+</span>
            <span className="text-sm">some txt</span>
        </div>
    </div>
  );
}
export default Stats;
