import CardCompany from "./card-company"
import CardProjects from "./card-projects";
import CardEducation from "./card-education";
import CardContac from "./card-contact";

export default function Container({ title}) {
    const text_p = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus illo, provident, dignissimos sint mollitia rem perferendis porro, et possimus ea quo expedita voluptates. Nesciunt qui unde similique ducimus consequatur ea! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ad labore magni, voluptatibus deserunt doloribus doloremque ipsa maxime, assumenda ullam omnis sit nobis officia suscipit veniam pariatur laboriosam totam ea.'


    let exp = <div className="grid columns-1 gap-10">
        <CardCompany />
        <CardCompany />
    </div>

    let pro = <div className="md:grid md:grid-cols-1 lg:grid-cols-3 gap-3 ">
        <CardProjects />
        <CardProjects />
        <CardProjects />
    </div>

    let edu = <div className="grid columns-1 gap-10">
        <CardEducation />
        <CardEducation />
    </div>


    let cont = <div className="md:grid md:grid-cols-4 _lg:grid-cols-4 gap-1 ">
        <CardContac />
        <CardContac />
        <CardContac />
        <CardContac />
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
