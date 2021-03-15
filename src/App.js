import './App.css';
import Navbar from 'Components/Navbar'
import ClientBody from 'Components/ClientBody'

function App() {
  return (
    <div className="App">
      <nav className="grey lighten-2">
        <Navbar />
      </nav>
      <section className="main">
        <ClientBody />
      </section>
    </div>
  );
}

export default App;
