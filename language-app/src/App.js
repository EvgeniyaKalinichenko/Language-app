import './App.css';
import Table from './components/Table';
import CardForm from './components/CardForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardForm />
        <Table />
      </header>
    </div>
  );
}

export default App;
