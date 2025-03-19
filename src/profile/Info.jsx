function Info() {
  return (
    <div className="flex flex-col gap-y-8 px-6 mb-8 md:col-span-5 md:justify-between md:mb-0 lg:col-span-3">
      <div className="flex gap-x-4 text-primaryText md:flex-col md:gap-y-6">
        <div className="flex items-center justify-between bg-background p-3.5 flex-1 rounded-2xl">
          <p className="text-sm text-gray-300">Name:</p>
          <p>Annika Qiao</p>
        </div>
        <div className="flex items-center justify-between bg-background p-3.5 flex-1 rounded-2xl">
          <p className="text-sm text-gray-300">Location:</p>
          <p>Califronia</p>
        </div>
      </div>
      <div className="flex items-center justify-around text-4xl text-primaryText bg-background p-2 rounded-2xl">
        <span><i className="bx bx-envelope cursor-pointer hover:text-[#E4405F] transition-all duration-300"/></span>
        <span><i className="bx bx-phone cursor-pointer hover:text-[#E4405F] transition-all duration-300"/></span>
        <span><i className="bx bx-message-square-dots cursor-pointer hover:text-[#E4405F] transition-all duration-300"/></span>
        <span><i className="bx bxl-linkedin cursor-pointer hover:text-[#E4405F] transition-all duration-300"/></span>
        <span><i className="bx bxl-instagram cursor-pointer hover:text-[#E4405F] transition-all duration-300"/></span>
      </div>
    </div>
  );
}
export default Info;
