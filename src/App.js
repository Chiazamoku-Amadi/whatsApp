import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import View from "./Components/View";

function App() {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <aside className="side">
        <SideBar />
      </aside>
      <main className="view">
        <View />
      </main>
    </div>
  );
}

export default App;
