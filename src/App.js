import { ChatEngine, ChatFeed } from 'react-chat-engine';
import './App.css';
import './components/ChatFeed.jsx';

function App() {
  return (
    <div className="App">
    {/* <h1>first</h1> */}
    <ChatEngine
      height ="100vh"
      projectID="ed2aceaf-1d3e-4ede-ba89-3abe04460ca7"
      userName="nataliap"
      userSecret="qwerty"
      renderChatFeed = { (chatAppProps) => <ChatFeed { ...chatAppProps } />}
      onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
      />
    </div>
  );
}

export default App;
