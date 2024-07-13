import { notifyError, notifySuccess } from "./services/NotificationService";

function App() {
  return (
    <div className="App">
      <button className="btn" onClick={() => notifyError("Yeah")}>Button</button>
    </div>
  );
}

export default App;
