
import img_profile from "@/assets/Profile.png";
function ProfilePicture() {
  return (
    <div className="p-6 mb-2 md:mb-0 md:p-0 md:pl-6 md:col-span-4 lg:col-span-3">
      <img
        className="w-full h-full object-cover rounded-3xl shadow-lg"
        src={img_profile}
        alt="Profile"
      />
    </div>
  );
}

export default ProfilePicture;
