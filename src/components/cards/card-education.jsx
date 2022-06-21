function CardEducation({ title, date, text, list }) {
    return (
        <>
            <div className="shadow-xl p-5">

                <div className="flex items-center pl-0 mb-6">

                    <div className="p-0.5">
                        <p className="text-2xl">{title}</p>
                        <p className="text-sm">{date}</p>
                    </div>

                </div>

                <div>
                    <p className="mb-4">{text}</p>
                    <ul>
                        {
                            list.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )

}

export default CardEducation;