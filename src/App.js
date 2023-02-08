import Calci from "./Component/Calci";
import "./App.css";
const style = {
  margin:"0px auto",
  width:"50%"
  // text-align: center;
}


function App() {
  return (
    <div className="center" style={style}>
      <Calci/>
    </div>
  );
}

export default App;
