import C from "./components/C";
import "./App.css"
function App() {
  const containerStyle = {
    background: 'linear-gradient(to bottom, #ffffff, #fff9b1)', // Example gradient from white to red
    padding: '20px', // Example padding
    borderRadius: '8px' // Example border radius
  };
  return (
    <div className="App" style={containerStyle} >
      <C />
    </div>
  );
}

export default App;
