import CardContact from "../cards/card-contact";
import utils from "../../utils/utils.json";


export default function Contact() {

    let concat = utils.contact;

    return (

        <div className="md:grid md:grid-cols-4 _lg:grid-cols-4 gap-1 ">
            {
                concat.map((item, index) => {
                    <CardContact key={index} link={item.link} />
                })
            }
        </div>
    )
}
