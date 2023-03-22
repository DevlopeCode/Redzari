import React from 'react'
import ReactDOM from 'react-dom';
import Navigator from './src';
import reportWebVitals from './reportWebVitals';


export default function App() {
    return (
        <Navigator />
    )
}

ReactDOM.render(<App />, document.getElementById('stoon'));
// reportWebVitals();
// const root = ReactDOM.createRoot(document.getElementById('stoon'));
// root.render(
//     <React.StrictMode>
//         <Navigator />
//     </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

