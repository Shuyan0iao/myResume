import ProfilePicture from "./ProfilePicture";
import Info from "./Info";
import Resume from "./Resume";
import Stats from "./Stats";
import Portfolio from "./Portfolio";
import About from "./About";

function Profile () {
    return (
        <>
            <ProfilePicture />
            <Info />
            <Resume />
            <Stats />
            <Portfolio />
            <About />
        </>
    );
}
export default Profile;