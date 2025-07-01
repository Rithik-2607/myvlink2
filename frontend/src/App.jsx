// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup'; // Adjust path if different

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* You can add more routes here */}
      </Routes>
    </div>
  );
}

export default App;
