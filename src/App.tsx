import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './pages/layout/layout.component';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <div>Hello world! 123</div>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
