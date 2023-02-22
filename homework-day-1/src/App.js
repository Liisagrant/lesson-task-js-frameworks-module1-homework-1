import "./App.css";
import ProfileName from "./components/ProfileName";
import DefaultProfile from "./components/DefaultProfile";

function App() {
  return (
    <div className="App">
      <ProfileName name="Lisa" />
      <DefaultProfile altText="Profile image" />
    </div>
  );
}

export default App;
