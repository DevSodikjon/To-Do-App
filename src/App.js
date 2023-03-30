import Home from "./CountryRouter/home/Home";
import "./App.css";
import { Routes, Route } from "react-router";
import SingleArticle from "./CountryRouter/single-article/SingleArticle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news/:id" element={<SingleArticle />} />
        </Routes>
        {/* <SingleArticle /> */}
        {/* <Home /> */}
      </header>
    </div>
  );
}

export default App;
