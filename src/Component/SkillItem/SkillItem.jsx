

const SkillItem = ({ Name }) => {
    return (
        <div className="bg-alpha p-4 rounded-md border border-white">
            <span className="  text-center  rounded-md  text-animation font-semibold  "> {Name}</span>
        </div>
    );
};

export default SkillItem;