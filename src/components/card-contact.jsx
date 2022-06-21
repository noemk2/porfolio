export default function CardContact({ link, img }) {
    return (
        <>
            <div className="p-4 ">
                <a href={link} target="_blank" >
                    <img className="w-12 mx-auto bg-no-repeat bg-cover " src={img} alt="" />
                </a>
            </div>
        </>

    )

}