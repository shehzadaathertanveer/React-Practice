import { useState,useCallback,useEffect,useRef} from 'react'

function App() {

  const passRef = useRef(null)
const [length, setlength] = useState(8)
const [useNumbers, setuseNumbers] = useState(false)
const [useCharacters, setuseCharacters] = useState(false)

const [password, setpassword] = useState("")

const passwordGenerator = useCallback ( () => {
  let pass = ""
  let srr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  if(useNumbers){
    srr += "0123456789"
  }
  if(useCharacters){
    srr += "!@#$%^&*()_+"
  }

  for(let i=0;i<length;i++){
    const randomIndex = Math.floor(Math.random()*srr.length)
    pass += srr[randomIndex]
  }

  setpassword(pass)

},[length,useNumbers,useCharacters,setpassword])

useEffect(() => {
  passwordGenerator()
}, [passwordGenerator,length,useNumbers,useCharacters])

const copyPassword = useCallback(() => {
  passRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])
return (
  <div className="w-full h-screen bg-black flex justify-center items-center">
  <div className="w-full max-w-md mx-4 shadow-md rounded-xl px-5 py-8 text-orange-500 bg-gray-900">
    <h1 className="text-2xl font-bold mb-5 text-center text-white">Password Generator</h1>
    <div className="flex flex-col gap-4">
    </div>
    <div className="flex flex-row rounded-md overflow-hidden border-2 border-gray-700" >
    <input type="text" value={password} onChange={(e) => setlength(e.target.value)} className="w-full bg-white px-3 py-2" readOnly ref={passRef}/>
    <button className='bg-blue-700 text-white px-4 py-2 ' onClick={copyPassword}>copy</button>
    </div>
    <div  className="flex flex-row gap-3">
    <input type="range" min={6} max={100} value={length} onChange={(e) => setlength(parseInt(e.target.value))} id='range' /> <label for='range'>Length:{length}</label>
    <input type="checkbox" id='num' defaultChecked={useNumbers} onChange={() => setuseNumbers((prev) => !prev)} /><label for='num'>Numbers</label>
    <input type="checkbox" id='char' defaultChecked={useCharacters} onChange={() => setuseCharacters((prev) => !prev)}/><label for='char'>Characters</label>
    </div>
  </div>
</div>
  )
}

export default App
