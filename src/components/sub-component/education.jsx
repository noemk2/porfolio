import CardEducation from "../cards/card-education";
import utils from "../../utils/utils.json";


export default function Education() {

    let education = utils.education;

    return (

        <div className="grid columns-1 gap-10">
            {
                education.map((item, index) => {
                    <CardEducation key={index} title={item.title} date={item.date} text={item.text} list={item.list} />
                })
            }
        </div>
    )
}
