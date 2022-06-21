import CardCompany from "../cards/card-company";
import utils from "../../utils/utils.json";



export default function Company() {

    let company = utils.company;

    return (
        <div className="grid columns-1 gap-10">
            {
                company.map((item, index) => {
                    <CardCompany key={index} name={item.name} text={item.text} date={item.date} labors={item.labors} />
                })
            }
        </div>
    )
}
