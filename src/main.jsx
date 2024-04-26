import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import NotFound from "./Pages/NotFound.jsx";
import Form from "./Pages/Form.jsx";
import ContactProfile from "./Pages/ContactProfile.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		loader: () => fetch("http://localhost:5000/contacts"),
		children: [
			{
				path: "/add-new-contact",
				element: <Form />,
			},
			{
				path: "/contacts/:id",
				element: <ContactProfile />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/contacts/${params.id}`),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
