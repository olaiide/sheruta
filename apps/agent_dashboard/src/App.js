import React from "react";
import "./App.css";
import MainAppRoutes from "./routes/MainAppRoutes";
import { Provider } from "react-redux";
import store from './redux/store/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <MainAppRoutes />

      </Provider>
    </div>
  );
}

export default App;
