

const Banner = () => {
    return (
        <div className="relative py-4">
            <div className="relative">
                <img src="/Resources/back.jpg" alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
            <h2 className="text-white text-5xl font-bold absolute bottom-72 left-72">I Grow by helping people in need</h2>

            <div className="flex absolute bottom-52 left-96">

                <input type="text" className="w-96 px-1 h-11 rounded-md outline-none text-red-400 font-semibold" placeholder="Search here" />
                <button className="bg-red-400 h-11 absolute left-64 rounded-md text-white font-bold w-32">Search</button>
            </div>
        </div>
    );
};

export default Banner;