import Header from "./components/Header";
import {Footer} from "./components/Footer";
import Student from "./components/Student";

function App() {
  const std1 = {name: "Nabaworn Limwatthana ", stdid: "6802041510112", sect: "TCT", tel: '1669'};
  //const std2 = {name: "Jidapa", stdid: "6802041510121", sect: "TCT", tel: '191'};

  return (
    <div>
      <Header />
      <Student stdInfo={std1}/>
      <Footer />
    </div>
  );
}

export default App;
