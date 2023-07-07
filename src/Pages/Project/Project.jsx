import { useEffect, useState } from "react";
import ProjectCard from "../../Component/ProjectCard/ProjectCard";
import Card from "../../Component/ProjectCard/Card";


const Project = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])




    return (
        <div>
            <h2 className="text-center font-bold text-2xl my-5 uppercase">Our Project</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
                {
                    project.map(item => <ProjectCard key={item.id} item={item} />)
                }


            </div>
        </div>
    );
};

export default Project;