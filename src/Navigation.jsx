function Navigation() {
    return (
        <div className="flex itens-center justify-between bg-background text-primaryText m-6 mb-0 p-3.5 rounded-2xl md:mb-6 md:col-span-12">
            <a href="#" className="text-gray-300">
                Title1
                <span className="font-semibold text-primaryText">semiTitle</span>
            </a>
            <div className="text-xl">
                <i className="bx bx-menu cursor-pointer"></i>
            </div>
        </div>
    );
}
export default Navigation;