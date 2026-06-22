import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>React GitHub Pages Demo</h1>
      <h1>Version 2</h1>
      <p>
        This application is automatically deployed using GitHub Actions.
      </p>

      <button
        onClick={() => alert("Deployment Working!")}
      >
        Test Button
      </button>
    </div>
  );
}

export default App;