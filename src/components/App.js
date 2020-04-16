import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from '../components/Events';
import OperationLogs from '../components/OperationLogs';
import EventForm from '../components/EventForm';

import AppContext from '../contexts/AppContext';

import reducer from '../reducers/';

const APP_KEY = 'appWithredux';

const App = () => {
  const appWithredux = localStorage.getItem(APP_KEY);

  const initialState = appWithredux
    ? JSON.parse(appWithredux)
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
