import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Body from './Body';
import HomeBody from './HomeBody';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Abs from './exercises/Abs';
import Bicep from './exercises/Bicep';
import Calves from './exercises/Calves';
import Chest from './exercises/Chest';
import Glutes from './exercises/Glutes';
import Hamstring from './exercises/Hamstring';
import Lats from './exercises/Lats';
import Quads from './exercises/Quads';
import Shoulders from './exercises/Shoulders';
import Triceps from './exercises/Triceps';
import { AppProvider } from './AppContext';


const router = createBrowserRouter([

  {
    path: "/",
    element: <AppProvider><App></App></AppProvider>,
  },
  {
    path:"/body",
    element: <Body></Body>
  },
  {
    path:"/homebody",
    element: <HomeBody></HomeBody>
  },
  {
    path:"/abs",
    element: <Abs></Abs>
  },
  {
    path:"/biceps",
    element: <Bicep></Bicep>
  },
  {
    path:"/calves",
    element: <Calves></Calves>
  },
  {
    path:"/chest",
    element: <Chest></Chest>
  },
  {
    path:"/glutes",
    element: <Glutes></Glutes>
  },
  {
    path:"/hamstring",
    element: <Hamstring></Hamstring>
  },
  {
    path:"/lats",
    element: <Lats></Lats>
  },
  {
    path:"/quads",
    element: <Quads></Quads>
  },
  {
    path:"/shoulders",
    element: <Shoulders></Shoulders>
  },
  {
    path:"/triceps",
    element: <Triceps></Triceps>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={router} />
    {/* <App /> */}
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
