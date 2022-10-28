import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <h1>first</h1> */}
    <ChatEngine
      height ="100vh"
      projectID="PROJECT_ID"
      userName="nataliap"
      userSecret="PASS"
      />
    </div>
  );
}

export default App;
