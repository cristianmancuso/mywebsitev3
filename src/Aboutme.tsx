import Imagen from "./images/Imagen"
function Aboutme() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    <h2 className="sm:text-3xl text-2xl font-medium  mb-2 text-black text-center pb-20">About Me:</h2>
      <div className="flex flex-col gap-5">
      <p className="leading-relaxed text-md">I studied Audiovisual Design, where I learned to use all the digital tools, edit videos, clean up audio, create logos, fliers, and so much more. In 2019, I completed the UX/UI Expert course. Since 2021, I have become very interested in programming, and have learned how to use various tools in this field. I find it incredibly fascinating as I am constantly learning new coding languages and strategies.</p>
      <p className="leading-relaxed text-md">Nice to meet you! Here is a bit about me: I am a calm and creative person. I like challenging myself to learn and experience new things. I have lived in three different countries: Argentina, Spain, and The USA. I can speak Spanish and English. I enjoy sports, especially soccer, and spending time with my loved ones.</p>
      </div>
      <span className="inline-block h-1 w-10 rounded bg-black mt-8 mb-6"></span>
      <div className="flex justify-center items-center py-5">
        <img src={Imagen.image7} className="w-[200px]  border border-black rounded-lg "></img>
        </div>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-md">Cristian Mancuso</h2>
      <p className="text-gray-500">FrontEnd, Image and Sound Designer, UX/UI Expert</p>
    </div>
  </div>
</section>
  )
}

export default Aboutme