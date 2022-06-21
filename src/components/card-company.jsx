function CardCompany({ name, text, date, labors }) {
    return (
        <>
            <div className="shadow-xl p-5">

                <div className="flex items-center pl-0 mb-6">

                    <img className=" w-14 bg-no-repeat bg-cover " src="https://avatars.githubusercontent.com/u/37389982?v=4" alt="" />
                    <div className="ml-3 p-0.5">
                        <p className="text-2xl">{name}</p>
                        <p className="text-sm">{date}</p>
                    </div>

                </div>

                <div>
                    <p className="mb-4">{text}</p>
                    <ul>
                        {
                            labors.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })

                        }

                    </ul>
                </div>
            </div>
        </>
    )

}

export default CardCompany;