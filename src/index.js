import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/Colors/colors.css"
import "./components/Bts/Bts.css"
import './index.css'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
			<App />
  </React.StrictMode>
);
