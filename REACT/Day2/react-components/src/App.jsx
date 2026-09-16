import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="app">
      <h1>React Components</h1>

      <section>
        <h2>Button Component</h2>
        <Button />
      </section>

      <section>
        <h2>Input Component</h2>
        <Input />
      </section>

      <section>
        <h2>Card Component</h2>
        <Card />
      </section>
    </div>
  );
};

export default App;