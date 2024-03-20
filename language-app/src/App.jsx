import "./App.css";
import Table from "./components/Table";
import CardForm from "./components/CardForm";
import CardWrapper from "./components/CardWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/cards" element={<CardForm />} />
            <Route path="/cards_test" element={<CardWrapper />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
