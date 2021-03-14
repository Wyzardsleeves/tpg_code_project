import logo from './logo.svg';
import './App.css';
import Navbar from 'Components/Navbar'
import ClientBody from 'Components/ClientBody'

function App() {
  return (
    <div className="App">
      <nav className="grey lighten-2">
        <Navbar />
      </nav>
      <section>
        <ClientBody />
      </section>
    </div>
  );
}

export default App;
