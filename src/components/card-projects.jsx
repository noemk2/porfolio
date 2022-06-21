export default function CardProjects({ title, img, linked }) {
    // console.log(linka)
    return (
        <>
            <div className="bg-gray-300 p-6 mb-6">
                <p className="text-3xl mb-6">{title}</p>
            
                <a href={linked} target="_blank">

                    <img className="mx-auto bg-no-repeat bg-cover " src={img} alt="" />
                </a>

           
            </div>
        </>

    )

}