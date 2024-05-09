import Imagen from "./images/Imagen";
import "./App.css";


function Cabeza() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <img
        alt="myPersonaje"
        className="relative z-20 h-[300px]"
        src={Imagen.image2}
      />
      <p className="text-center lg:text-2xl text-xl mt-2 text-neutral-300">
        Hi there! Welcome to my website.
      </p>
      <h1 className="md:text-4xl lg:text-6xl text-3xl font-bold text-white relative z-20">
        Cristian Mancuso
      </h1>
    </div>
  );
}

export default Cabeza;
