import CardProjects from "../cards/card-projects";
import utils from "../../utils/utils.json";


export default function Project() {

    let project = utils.project;

    return (
        <div className="md:grid md:grid-cols-1 lg:grid-cols-3 gap-3 ">
            {
                project.map((item, index) => {
                    <CardProjects key={index} title={item.title} img={item.img} link={item.link} />
                })
            }
        </div>
    )
}
