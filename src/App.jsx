import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Navbar from './components/header/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import News from './pages/news/News';
import Contacts from './pages/contacts/Contacts';
import Bags from './pages/category/bags/Bags';
import Shoes from './pages/category/shoes/Shoes';
import Watches from './pages/category/watches/Watches';
import Jewellery from './pages/category/jewellery/Jewellery';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bags" element={<Bags />} />
              <Route path="/shoes" element={<Shoes />} />
              <Route path="/watches" element={<Watches />} />
              <Route path="/jewellery" element={<Jewellery />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App
