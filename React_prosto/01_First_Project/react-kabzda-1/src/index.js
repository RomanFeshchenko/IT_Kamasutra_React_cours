import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 0 },
  { id: 2, message: "How is your IT?", likesCount: 12 },
  { id: 3, message: "It`s my first post", likesCount: 23 },
  { id: 4, message: "Labudi", likesCount: 32 },
  { id: 5, message: "It`s ", likesCount: 11 },
]
let dialogs = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Victor' },
  { id: 6, name: 'Valera' },
]
let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your IT?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/> </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
