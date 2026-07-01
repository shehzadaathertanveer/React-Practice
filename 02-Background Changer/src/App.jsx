import { useState } from "react";
import "./App.css";


function App() {
  
  const [color, setColor] = useState("pink");

  return (
    <div className="w-full h-screen duration-200 "
    style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
    <div className="bg-white rounded-3xl p-3 shadow-xl">
      <div className="flex flex-wrap gap-2 justify-center">
    <button className = " bg-red-700 text-white rounded-3xl px-5 py-2 shadow-lg" onClick={() => setColor('red')}>Red</button>
    <button className = "bg-blue-700 text-white rounded-3xl px-5 py-2 shadow-lg" onClick={() => setColor('blue')}>Blue</button>
    <button className = "bg-green-700 text-white rounded-3xl px-5 py-2 shadow-lg" onClick={() => setColor('green')}>Green</button>
    <button className = "bg-yellow-700 text-white rounded-3xl px-5 py-2 shadow-lg" onClick={() => setColor('yellow')}>Yellow</button>
    <button className = "bg-purple-700 text-white rounded-3xl px-5 py-2 shadow-lg" onClick={() => setColor('purple')}>Purple</button>
    <button className = "bg-pink-700 text-white rounded-3xl px-5 py-2 shadow-lg" onClick={() => setColor('pink')}>Pink</button>
    <button className = "bg-olive-700 text-white rounded-3xl px-5 py-2 shadow-lg" onClick={() => setColor('olive')}>Olive</button>
    <button className = "bg-white text-black rounded-3xl px-5 py-2 shadow-lg" onClick={() => setColor('white')}>White</button>
    <button className = "bg-gray-700 text-white rounded-3xl px-5 py-2 shadow-lg" onClick={() => setColor('gray')}>Gray</button>
    <button className = "bg-black text-white rounded-3xl px-5 py-2 shadow-lg" onClick={() => setColor('black')}>black</button>
      </div>
    </div>
      </div>
    </div>

  
  );
}

export default App;
