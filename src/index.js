
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';




const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path: "*",
    element: < page not found />
  }
])
root.render((<div>
  <RouterProvider router={router}/>
  
</div>));

