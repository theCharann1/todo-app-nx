import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { TodoPage } from './pages';

export function App() {
  return (
    <>
      <Routes>
        <Route 
          path="/"
          element={<TodoPage />}
        />
      </Routes>
    </>
  );
}

export default App;
