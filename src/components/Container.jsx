// import Company from "./sub-component/company";
// import Project from "./sub-component/project";
// import Education from "./sub-component/education";
// import Contact from "./sub-component/contact";

import CardCompany from "./cards/card-company";
import utils from "../utils/utils.json";


import CardProjects from "./cards/card-projects";
import CardEducation from "./cards/card-education";
import CardContact from "./cards/card-contact";


export default function Container({ title }) {

    let company = utils.company;
    let project = utils.project;
    let education = utils.education;
    let concat= utils.contact;

    let comp = <div className="grid columns-1 gap-10">
        {
            company.map((item) => {
                <CardCompany name={item.name} text={item.text} date={item.date} labors={item.labors} />
            })
        }
    </div>

    let pro = <div className="md:grid md:grid-cols-1 lg:grid-cols-3 gap-3 ">
        {
            project.map((item, index) => {
                <CardProjects key={index} title={item.title} img={item.img} link={item.link} />
            })
        }
    </div>

    let edu = <div className="grid columns-1 gap-10">
        {
            education.map((item, index) => {
                <CardEducation key={index} title={item.title} date={item.date} text={item.text} list={item.list} />
            })
        }
    </div>

    let con = <div className="md:grid md:grid-cols-4 _lg:grid-cols-4 gap-1 ">
        {
            concat.map((item, index) => {
                <CardContact key={index} link={item.link} />
            })
        }
    </div>




    return (
        <section className="p-7 pb-8">
            <div className="sm:mx-auto md:mx-10 lg:mx-20 xl:mx-48 2xl:mx-96">
                <h1 className="text-4xl mb-7">{title}</h1>
                <hr className="my-6" />
                {
                    title === "Experience" ? comp : title === "Projects" ? pro : title === "Education/Training" ? edu : title === "Contact" ? con : <p>{'Im fronted development in javascript and recently I study rust lang'} </p>
                }
            </div>
        </section>

    );

}
