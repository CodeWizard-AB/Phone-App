import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import ToggleButton from "./components/ToggleButton";

function App() {
	return (
		<div className="grid grid-cols-[auto_1fr]">
			<SideBar />
			<ToggleButton />
			<Outlet />
		</div>
	);
}

export default App;
