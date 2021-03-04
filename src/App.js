import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import './App.css';
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">

      {!user ? <Login /> : (
        <div className="myApp">
          <Header />
          <div className="app-body">

            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
