import ProfilePicture from "./ProfilePicture";
import Info from "./Info";
import Resume from "./Resume";
import Stats from "./Stats";
import Projects from "./Projects";
import About from "./About";

function Profile () {
    return (
        <>
            <ProfilePicture />
            <Info />
            <Resume />
            <Stats />
            <Projects />
            <About />
        </>
    );
}
export default Profile;