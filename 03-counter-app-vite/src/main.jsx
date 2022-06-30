import React from 'react'; // la biblioteca de react
import ReactDOM from 'react-dom/client'; // componente para renderizar componentes en el dom
import { CounterApp } from './CounterApp';
//import { HelloWorldApp } from './HelloWorldApp'; 
//import { FirstApp } from './FirstApp'
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 1 }/>
        {/* <FirstApp title="Hola, soy Seiya"/> */}
    </React.StrictMode>
);