import { Outlet, useLoaderData } from "react-router-dom";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
	const [contacts] = useState(useLoaderData());
	return (
		<div className="grid grid-cols-[auto_1fr]">
			<SideBar contacts={contacts} />
			<Outlet />
		</div>
	);
}

export default App;
