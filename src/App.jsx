import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
	return (
		<div className="grid grid-cols-[auto_1fr]">
			<SideBar />
			<Outlet />
		</div>
	);
}

export default App;
