import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("http://localhost:4000", {
  transports: ["websocket", "polling", "flashsocket"],
});

function App() {
  const [notification, setNotification] = useState("")
  const handleClick = () => {
    socket.emit("send_notification");
  };

  useEffect(() => {
    socket.on("notification", (message) => {
      setNotification(message); // Displays "Hello from server"
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{notification ? notification : "Message not recieved from server"}</h1>
        <button onClick={handleClick}>Recieve greeting</button>
      </header>
    </div>
  );
}

export default App;
