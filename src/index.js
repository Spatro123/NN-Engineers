import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
    import App from './App';
// import App from './Footer';
    // import App from './About';
// import App from './Menu';
// import App from './Portfolio.module';
// import App from './Vision.module';
//  import  App from './header';
  //  import App from './Service';
// import App from './society.module'
// import App from './Searchbar';
// import App from './team';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
