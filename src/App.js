import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./component/Gallery";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Gallery/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
