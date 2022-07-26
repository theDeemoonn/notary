import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Tariff from "./layout/tariff/tariff";
import Contact from "./layout/contact/contact";
import App from "./App";
import NotarialActs from "./layout/NotarialActs/NotarialActs";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/tariff" element={<Tariff/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/notarial_acts" element={<NotarialActs/>}/>
        </Routes>
    </BrowserRouter>
);


reportWebVitals();
