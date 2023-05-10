import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/home/Index";

const App = () => {
  return (
    <>
      <img
        src="/bg.png"
        className="fixed top-0 left-0 w-full h-full -z-10 object-cover"
        alt=""
      />
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
