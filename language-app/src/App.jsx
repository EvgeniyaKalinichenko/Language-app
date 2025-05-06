import "./App.css";
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./components/TablePage/Table";
import CardForm from "./components/AllFormsPage/CardForm";
import CardWrapper from "./components/CardTestPage/CardWrapper";
import Header from "./components/Header/Header";
import MissingPage from "./components/MissingPage/MissingPage";
import WordsStore from "./WordsStore";


const store = {
  wordsStore: new WordsStore(),
}

function App() {
  return (
    <Provider {...store}>
      <Router basename="/Language-app">
        <div className="App">
          <header className="App-header">
            <Header />
            <Routes>
              <Route path="/" element={<Table />} />
              <Route path="/cards" element={<CardForm />} />
              <Route path="/cards_test" element={<CardWrapper />} />
              <Route path="*" element={<MissingPage />} />
            </Routes>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
