import


function App() {
let value = 5

let addvalue = function () {
  value += 1
}

let removevalue = function () {
  value -= 1
}
  return (
    <>
    <h1>value counter</h1>
    <h2>current value: {value}</h2>
    <button
    onClick ={addvalue}
    >increase value</button>
    <br/>
    <button
    onClick ={ removevalue}
    >decrease value</button>
    </>
  )
}

export default App
