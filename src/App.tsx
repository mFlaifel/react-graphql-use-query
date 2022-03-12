import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostTemplate from './components/PostTemplate';
import AllPost from './components/AllPost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllPost />}></Route>
        <Route path='/single-post/:id' element={<PostTemplate />} />
      </Routes>
    </Router>
  );
};

export default App;
