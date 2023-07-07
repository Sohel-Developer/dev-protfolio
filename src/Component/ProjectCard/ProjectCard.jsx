

const ProjectCard = ({ item }) => {
    return (
        <div className="bg-alpha  rounded-lg shadow-lg">
            <div className="bg-alpha image-container w-full rounded-lg shadow-lg">
                <img src={item?.image} alt="" className="rounded-t-lg  cover " />
            </div>
            <div>
                <div className=" p-6 ">
                    <h2 className="font-bold mb-2 text-2xl text-cyan-700">{item?.name}
                    </h2>
                    <div className="space-x-4 flex z-30 justify-between ">
                        <a target="_blank" href={item?.live} className="text-cyan-700 font-semibold hover:text-cyan-600 transition underline text-sm">LiveSite 👉</a>
                        <a target="_blank" href={item?.clint} className="text-cyan-700 font-semibold hover:text-cyan-600 underline text-sm">Clint 👉</a>
                        <a target="_blank" href={item?.server} className="text-cyan-700 font-semibold hover:text-cyan-600  underline text-sm">Server 👉</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;