function About() {
    return (
        <div className="flex flex-col gap-y-4 bg-background p-3.5 rounded-2xl mx-6 mb-8 md:col-span-12 lg:mb-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-primaryText">About</h3>
                
            </div>
            <p className="text-gray-400 text-left">
            Hey there! I’m Shuyan, a developer who loves turning ideas into real-world apps with clean code and smart design. Whether it’s web, mobile, or a tiny WeChat Mini Program—I’m all about crafting smooth, user-friendly experiences.
            </p>
        </div>
    );
}
export default About;