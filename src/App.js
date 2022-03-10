import {useState } from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Explore from "./pages/explore/Explore";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
function App() {

  const [modalOpen , setModalOpen] = useState(false);
  const [modalPost , setModalPost] = useState({});
  return (
    <Router>
      <ScrollToTop/>
        <Navbar/>
        {modalOpen && <Modal setModalOpen={setModalOpen} modalPost={modalPost} modalOpen={modalOpen}/>}
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/explore">
              <Explore modalOpen={modalOpen} setModalOpen={setModalOpen} setModalPost={setModalPost}/>
            </Route>
            <Route path="/profile">
              <Profile setModalOpen={setModalOpen} setModalPost={setModalPost}/>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
