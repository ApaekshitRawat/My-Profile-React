import "./App.css";
import Profile from "./components/Profile";
import Name from "./components/Name";
import Resumesection from "./components/Resumesection";
import Sociallins from "./components/Sociallins";
import Description from "./components/Description";
import Projsects from "./components/Projsects";
import LastSection from "./components/LastSection";
function App() {
  return (
    <>
      <div className="container">
        <Profile />
        <Name />
        <Resumesection />
        <Sociallins />
        <Description />
        <Projsects />
        <LastSection />
      </div>
    </>
  );
}

export default App;
