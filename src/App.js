import "./App.scss"
import { useState } from "react"
import Header from "./components/Header"
import SwitchButton from "./components/SwitchButton"

function App() {
  const [switch1, setSwitch1] = useState(false)
  const [switch2, setSwitch2] = useState(false)
  const [switch3, setSwitch3] = useState(false)

  return (
    <div className="App">
      <Header title={"READY TO GO"} />
      <main className="main">
        <div className="switch">
          <SwitchButton switch={switch1} setSwitch={setSwitch1} />
          <SwitchButton switch={switch2} setSwitch={setSwitch2} />
          <SwitchButton switch={switch3} setSwitch={setSwitch3} />
        </div>

        {switch1 && switch2 && switch3 ? (
          <div className="go">
            <button>GO ! </button>
          </div>
        ) : (
          <div className="way">
            <button>NO WAY !</button>
          </div>
        )}

        <div className="clear">
          <button
            onClick={() => {
              setSwitch1(false)
              setSwitch2(false)
              setSwitch3(false)
            }}
          >
            {" "}
            CLEAR{" "}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
