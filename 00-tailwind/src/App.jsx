import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-6 rounded-xl">tailwind test</h1>
      <Card 
        title="Sample Card"
        description="This is a simple card component built with Tailwind CSS."
        imageUrl={heroImg}
      />
    </>
  );

}

export default App;
