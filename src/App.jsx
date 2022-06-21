import Container from "./components/Container"

function App() {

  const variable = ["About Me", "Experience", "Projects", "Education/Training", "Contact"]

  return (
    <>
      <div className="
  bg-gray-500 text-white font-lato 
    font-thin pt-20 pb-6
    text-center
  ">
        <img className="mx-auto w-24 rounded-full bg-no-repeat bg-cover" src="https://user-images.githubusercontent.com/37389982/174700895-62448072-7301-49dd-8ba8-35201e78f44f.jpg" alt="" />

        <div className="p-3">

          <div className="font-light">
            <h1 className=" text-4xl">Noe Huaccharaque</h1>
            <h2 className="tracking-normal text-lg mb-10">FullStack Developer</h2>
          </div>
          <p className="tracking-normal text-lg mt-0">resume</p>
        </div>

      </div>

      {
        variable.map((item, index) => {
          return <Container title={item} key={index} />
        })

      }


      {/* <Container title={variable[0]} />

      <Container title={variable[1]} />

      <Container title={variable[2]} />

      <Container title={variable[3]} />

      <Container title={variable[4]} /> */}

      <div className="  bg-gray-200 text-white font-lato 
    font-thin pt-20 pb-6
    text-center">

      </div>

    </>

  )

}

export default App
