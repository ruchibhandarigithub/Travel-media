import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes and Route from react-router-dom v6
import store from './redux/store';
import Home from './components/Home';
import Detail from './components/Detail';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
