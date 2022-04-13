import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './App.css';

import Main from './components/Main';

function App() {
  return (
  // <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  // </Provider>
  );
}

export default App;
