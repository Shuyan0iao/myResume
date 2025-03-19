function About() {
    return (
        <div className="flex flex-col gap-y-4 bg-background p-3.5 rounded-2xl mx-6 mb-8 md:col-span-12 lg:mb-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-primaryText">About</h3>
                <a href="#" className="text-xl text-gray-300 hover:text-primaryText transition-all duration-300">Resume</a>
            </div>
            <p className="text-gray-400 text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
        </div>
    );
}
export default About;