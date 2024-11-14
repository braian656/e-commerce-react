import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import App from './home-component/App.jsx'
import './output.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <Provider store={store}>
        <App></App>
       </Provider>
    </BrowserRouter>
)
