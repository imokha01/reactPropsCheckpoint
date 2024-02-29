import "./App.css";
import CardList from "./components/CardList";

function App() {
 
  return (
    <div className="app">
      <p className="text-[2.5rem]"> PLAYER <span className="text-red-500 mr-[30px]">FIFA CARD</span></p>
      <CardList />
    </div>
  );
}

export default App;
