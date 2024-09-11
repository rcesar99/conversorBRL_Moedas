import React from "react"; // Importação do React
import ReactDOM from "react-dom/client"; // Importação do ReactDOM para renderização no DOM
import "./index.css"; // Arquivo CSS global da aplicação
import App from "./App"; // Importação do componente App

// Cria o root da aplicação e renderiza o componente App dentro do elemento com id 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
