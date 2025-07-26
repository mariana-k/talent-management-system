import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { CandidatesList } from './pages/CandidatesList';
import { CandidateProfile } from './pages/CandidateProfile';
import { CompaniesList } from './pages/CompaniesList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/candidates" replace />} />
            <Route path="/candidates" element={<CandidatesList />} />
            <Route path="/candidates/:id" element={<CandidateProfile />} />
            <Route path="/companies" element={<CompaniesList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
