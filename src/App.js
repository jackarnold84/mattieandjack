import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RedirectPage from './components/RedirectPage';

function App() {
  return (
    <Router basename="/mattieandjack">
      <Routes>
        <Route path="/" element={<RedirectPage />} />
        <Route path="/faq" element={<RedirectPage subPath="/faq" />} />
      </Routes>
    </Router>
  );
}

export default App;
