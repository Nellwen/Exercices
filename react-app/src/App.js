import Form from "./components/Form";
import List from "./components/List";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { RecoilRoot } from "recoil";


function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<List />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </RecoilRoot>
    </div>
  );
}

export default App;
