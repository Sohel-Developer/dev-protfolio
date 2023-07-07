
import SkillItem from "../../Component/SkillItem/SkillItem";
const Skill = () => {
    return (
        <div>
            <div>
                <h4 className="text-center text-xl font-bold my-5">Expretness</h4>

                <div className=" flex flex-wrap md:w-1/2 md:mx-auto gap-5 justify-center">

                    <SkillItem Name="HTML5" />
                    <SkillItem Name="CSS" />
                    <SkillItem Name="Bootstrap" />
                    <SkillItem Name="React-Bootstrap" />
                    <SkillItem Name="Material UI" />
                    <SkillItem Name="Tailwind" />
                    <SkillItem Name="Daisy UI" />
                    <SkillItem Name="JavaScript" />
                    <SkillItem Name="Node-JS" />
                    <SkillItem Name="MongoDB" />
                    <SkillItem Name="Express" />
                    <SkillItem Name="Rest-API" />
                    <SkillItem Name="Firebase" />

                </div>
            </div>
            <div>
                <h4 className="text-center text-xl font-bold my-5">Comfortable:-</h4>
                <div className=" flex flex-wrap gap-5 justify-center">
                    <SkillItem Name="Axios" />
                    <SkillItem Name="Redux" />
                </div>
            </div>
            <div>
                <h4 className="text-center text-xl font-bold my-5">Familiar:-</h4>
                <div className=" flex flex-wrap gap-5 justify-center">
                    <SkillItem Name="Next-JS" />
                    <SkillItem Name="TypeScript" />
                </div>
            </div>
            <div>
                <h4 className="text-center text-xl font-bold my-5">Tools</h4>
                <div className=" flex flex-wrap gap-5 justify-center">
                    <SkillItem Name="NPM" />
                    <SkillItem Name="Git" />
                    <SkillItem Name="VS_CODE" />
                    <SkillItem Name="Vercel" />
                    <SkillItem Name="Netlify" />
                    <SkillItem Name="Dev-Tool" />
                    <SkillItem Name="Discord" />
                    <SkillItem Name="Figma" />
                </div>
            </div>
        </div>
    );
};

export default Skill;