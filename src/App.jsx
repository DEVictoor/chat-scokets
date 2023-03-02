import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import socketIo from "socket.io-client";
import ChatPage from "./components/ChatPage";

const socket = socketIo.connect("http://161.97.164.81:8001");

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
