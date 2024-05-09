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
                  G&M Design
                </h2>
                <p className="mb-4">
                G&M Design is a renovation company in Argentina. I developed all of the elements on this website and also created the logo, businnes cards, and fliers for G&M Design.
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
                Alongside the company owner, I created this website to promote the pet services offered. Everything was developed from scratch, including descriptions of services, testimonials, inquiry boxes, photos, and a detailed background of the owner's experience. 
                </p>
                <button className="buttonProjects"><a href="https://samshappytails.com/" target="_blank">Visit Website</a></button>
              </div>
            </div>
          </div>

           {/*Projecto 3*/}
         <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="Gymdesign"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={Imagen.image7}/>
              <div className="flex-grow sm:pl-8">
                <h2 className=" font-medium text-lg text-gray-900">
                Plagamix Fumigaciones
                </h2>
                <p className="mb-4">
                Alongside the company owner, I created this website to promote the fumigation services offered. Everything was developed from scratch.
                </p>
                <button className="buttonProjects"><a href="https://www.fumigacionesplagamix.com/" target="_blank">Visit Website</a></button>
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
                The Baumann family hired me to create the website, video, and memorial card for their beloved family member's memorial services.  I organized all of the photos and videos into one cohesive video with music.  I embedded that video onto the website I created for the Baumann family.  Also on the website are some words from the family, a text box for guests visiting the site to leave a comment, pictures, and more.
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
                I had the privilege of creating the website in tribute to Walter Gallo. In collaboration with his family, we selected the design, layout, website feautures, colors, and more. It was an honor to make their vision come to life by creating the website with the corresponding video and memorial card with the QR code to lead you to the website.
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
