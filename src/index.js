// import React from "react";

import ReactDOM from "react-dom";
import App from "./App";

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
// const root = document.querySelector("#root");

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="240" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>
//       Доступность: {data.quantity < 10 ? "заканчивается" : "есть в наличии"}
//     </p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// const painting2 = (
//   <div>
//     <img src={data2.url} alt={data2.title} width="240" />
//     <h2>{data2.title}</h2>
//     <p>
//       Автор: <a href={data2.author.url}>{data2.author.tag}</a>
//     </p>
//     <p>Цена: {data2.price} кредитов</p>
//     <p>
//       Доступность: {data2.quantity < 10 ? "заканчивается" : "есть в наличии"}
//     </p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// const cards = (
//   <div>
//     {painting}
//     {painting2}
//   </div>
// );

// const spanElem1 = <span>Hello! </span>;
// const spanElem2 = <span>I have created React App</span>;

// const jsxElem = (
//   <div>
//     {spanElem1}
//     {spanElem2}
//   </div>
// );
// ReactDOM.render(jsxElem, root);

// ========================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
