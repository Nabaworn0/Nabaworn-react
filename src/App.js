import Header from "./components/Header";
import {Footer} from "./components/Footer";
import Student from "./components/Student";
import Education from "./components/Education";
import Activity from "./components/Activity";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClickEvent from "./components/ClinkEvent";
import TCTForm from "./components/TCTForm";


function App() {
  const std1 = {name: "Nabaworn Limwatthana ", stdid: "6802041510112", sect: "TCT", tel: '1669'};
  //const std2 = {name: "Jidapa", stdid: "6802041510121", sect: "TCT", tel: '191'};

  return (
    <div> 
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Student stdInfo={std1}/>} />
          <Route path="/edu" element={<Education />} />
          <Route path="/act" element={<Activity />} />
          <Route path="/event" element={<ClickEvent />} />
          <Route path="/form" element={<TCTForm />} />
          <Route path="*" element={<PageNotFound />} />      
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
