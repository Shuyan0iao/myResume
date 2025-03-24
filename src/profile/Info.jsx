import wechatQR from "@/assets/wechat.png";
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
        {/* 邮件 */}
        <a href="mailto:annikaqiao@gmail.com" title="Send Email">
          <i className="bx bx-envelope cursor-pointer hover:text-yellow transition-all duration-300" />
        </a>

        {/* 电话 */}
        <a href="tel:+18058699672" title="Call Phone">
          <i className="bx bx-phone cursor-pointer hover:text-red transition-all duration-300" />
        </a>

        {/* 微信二维码 */}
        <span
          title="WeChat"
          className="relative group cursor-pointer inline-block"
        >
          <i className="bx bx-message-square-dots hover:text-green transition-all duration-300" />

          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white p-2 rounded-lg shadow-lg z-10 w-36 h-36">
            <img
              src={wechatQR}
              alt="WeChat QR Code"
              className="w-full h-full object-contain block"
            />
          </div>
        </span>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shuyanqiao/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="bx bxl-linkedin cursor-pointer hover:text-blue transition-all duration-300" />
        </a>

        {/* Google Maps 定位 */}
        <a
          href="https://www.google.com/maps/place/3409+Lamp+St,+Oakland,+CA+94601"
          target="_blank"
          rel="noopener noreferrer"
          title="View Location"
        >
          <i className="bx bx-location-plus cursor-pointer hover:text-red transition-all duration-300" />
        </a>
      </div>
    </div>
  );
}
export default Info;
