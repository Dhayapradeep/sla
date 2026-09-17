import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>React Component Tasks</h1>

      <h2 className="task-title">Task 1: Profile Components</h2>
      <Header />
      <ProfileCard />

      <h2 className="task-title">Task 2: Product Components</h2>
      <Navbar />
      <ProductCard />
    </div>
  );
};

export default App;