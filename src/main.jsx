import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Store.jsx';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer /> {/* Ensure this is included */}
    </Provider>
  </StrictMode>
);
