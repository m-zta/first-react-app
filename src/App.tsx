import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="container mt-5">
      <h1>My React + Bootstrap App</h1>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Open Modal
      </button>

      {/* Modal Component */}
      <Modal />
    </div>
  );
}

export default App;
