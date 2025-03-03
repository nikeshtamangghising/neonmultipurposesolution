import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* Other components/routes will go here */}
      </div>
    </Router>
  );
}

export default App; 