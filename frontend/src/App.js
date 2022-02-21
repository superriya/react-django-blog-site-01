import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LeftSideBlock from './components/LeftSideBlock';
import RightSideBlock from './components/RightSideBlock';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4" style={{background: "#c20430"}}>
          <LeftSideBlock />
          </div>
          <div className="col-lg-8 col-md-8 scroll-col" style={{padding: "0px 50px"}}>
          <RightSideBlock />
          </div>  
        </div>
      </div>
    </div>
  );
}

export default App;
