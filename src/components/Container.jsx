import CardCompany from "./card-company"
import CardProjects from "./card-projects";
import CardEducation from "./card-education";
import CardContac from "./card-contact";

import data from "../utils/data.json";


let company = data.company;
let projects = data.project;
let education = data.education;
let contact = data.contact




export default function Container({ title }) {
    const text_p = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus illo, provident, dignissimos sint mollitia rem perferendis porro, et possimus ea quo expedita voluptates. Nesciunt qui unde similique ducimus consequatur ea! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ad labore magni, voluptatibus deserunt doloribus doloremque ipsa maxime, assumenda ullam omnis sit nobis officia suscipit veniam pariatur laboriosam totam ea.'


    let exp = <div className="grid columns-1 gap-10">
        {
            company.map((item) => { return <CardCompany name={item.name} text={item.text} date={item.date} labors={item.labors} /> })
        }
    </div>


    let pro = <div className="md:grid md:grid-cols-1 lg:grid-cols-3 gap-3 ">
        {
            projects.map((item) => { return <CardProjects title={item.title} img={item.img} linked={item.link} /> })
        }
    </div>

    let edu = <div className="grid columns-1 gap-10">
        {
            education.map((item) => { return <CardEducation title={item.title} text={item.text} date={item.date} labors={item.labors} /> })
        }

    </div>


    let cont = <div className="md:grid md:grid-cols-4 _lg:grid-cols-4 gap-1 ">
        {
            contact.map((item) => { return <CardContac link={item.link} /> })
        }
    </div>



    return (
        <section className="p-7 pb-8">
            <div className="sm:mx-auto md:mx-10 lg:mx-20 xl:mx-48 2xl:mx-96">
                <h1 className="text-4xl mb-7">{title}</h1>
                <hr className="my-6" />
                {
                    title === "Experience" ? exp : title === "Projects" ? pro : title === "Education/Training" ? edu : title === "Contact" ? cont : <p>{text_p} </p>
                }
            </div>
        </section>

    );

}
