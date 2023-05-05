import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp;

// useEffect ( () => {
//     tg.ready();
// }, [])

const onClose = () =>{
    tg.close()
}

function App() {
  return (
    <div className="App">
        WORK <br/>

        <button onClick={onClose}>Закрыть</button>

    </div>
  );
}

export default App;
