import Imagen from "./images/Imagen"
function Projects() {
  return (
    <section className="lg:p-20 md:p-16 sm:p-10 p-5">
      <div className="container px-5 py-24 mx-auto">
        

        <div className="flex flex-wrap -m-4">
             
             {/*Projecto 1*/}
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="Gymdesign"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={Imagen.image3}/>
              <div className="flex-grow sm:pl-8">
                <h2 className=" font-medium text-lg text-gray-900">
                  Gym Design
                </h2>
                <p className="mb-4">
                Home renovation company in Argentina. I worked on this project from scratch, starting with creating the logo, designing the website, and finally bringing it to life.
                </p>
                <button className="buttonProjects"><a href="https://www.gymdesignreformas.com/" target="_blank">Visit Website</a></button>
              </div>
            </div>
          </div>

              {/*Projecto 2*/}
              <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="Gymdesign"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={Imagen.image4}/>
              <div className="flex-grow sm:pl-8">
                <h2 className=" font-medium text-lg text-gray-900">
                Sam’s Happy Tails Pet Co.
                </h2>
                <p className="mb-4">
                Dog services company. With Sam, the owner, we started creating the project for her logo and website from scratch. I designed the logo, created the page layouts, and ultimately built the website
                </p>
                <button className="buttonProjects"><a href="https://samshappytails.com/" target="_blank">Visit Website</a></button>
              </div>
            </div>
          </div>




           {/*Projecto 4*/}
           <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="Gymdesign"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={Imagen.image6}/>
              <div className="flex-grow sm:pl-8">
                <h2 className=" font-medium text-lg text-gray-900">
                Alan J Baumann Sr. Memorial
                </h2>
                <p className="mb-4">
                The Baumann Family hired me to create the website in tribute to Alan J Baumann Sr. I developed this project following the guidelines of one of his sons, Alan J Baumann Jr. Grateful to the family for trusting me.
                </p>
                <button className="buttonProjects"><a href="https://ajbaumannsrmemorial.netlify.app/" target="_blank">Visit Website</a></button>
              </div>
            </div>
          </div>
        

         {/*Projecto 3*/}
         <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="Gymdesign"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={Imagen.image5}/>
              <div className="flex-grow sm:pl-8">
                <h2 className=" font-medium text-lg text-gray-900">
                Walter Gallo Memorial
                </h2>
                <p className="mb-4">
                I had the privilege of creating the website in tribute to Walter Gallo. Kara, one of his daughters, selected the elements she wanted to be on the website and its structure
                </p>
                <button className="buttonProjects"><a href="https://waltergallomemorial.netlify.app/" target="_blank">Visit Website</a></button>
              </div>
            </div>
          </div>
        
        
        


        
        </div>
      </div>
    </section>
  );
}

export default Projects;
