export default function CardProjects({ title, img, link }) {
    return (
        <>
            <div className="bg-gray-300 p-6 mb-6">
                <p className="text-3xl mb-6">{title}</p>
                <a href={link} target="_blank">
                <img className="mx-auto bg-no-repeat bg-cover " src={img} alt="" />
                </a>
            </div>
        </>

    )

}