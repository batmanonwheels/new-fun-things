import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Marquee } from './components/Marquee';
import { Header } from './components/Header';
import { Footer } from './components/Footer.tsx';
import Home from './Home.tsx';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Marquee />
				<Header variant='default' />
				<Home />
				<Footer variant='default' />
			</>
		),
	},
	{
		path: '/about',
		element: <Home />,
	},
	{
		path: '/account',
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* <Marquee />
		<Header variant='default' /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
