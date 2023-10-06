import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import { getContent } from "./helpers/contentful.api";
import Loading from "./components/Loading";
import Subscribe from "./components/Subscribe";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop/scroll-to-top.component";
const promiseContent = getContent();

function App() {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    promiseContent
      .then((content) => {
        setContent(content.items);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <ScrollToTop />

      <Helmet>
        <script
          src="https://kit.fontawesome.com/0071b47268.js"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
        />
      </Helmet>

      {error || (
        <>
          {!loading && (
            <>
              <Navbar setIsOpen={setIsOpen} />
              <Subscribe isOpen={modalIsOpen} setIsOpen={setIsOpen} />

              <Routes>
                <Route path="/" element={<Home content={content} />} />
                <Route
                  path="/contact"
                  element={<Contact content={content} />}
                />
                <Route path="/about" element={<About content={content} />} />
              </Routes>

              <Footer openModal={setIsOpen} content={content} />
            </>
          )}

          {loading && <Loading />}
        </>
      )}
      {error && <h1>Error</h1>}
    </div>
  );
}

export default App;
