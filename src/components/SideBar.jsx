import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";

function SideBar() {
	return (
		<Sidebar
			rootStyles={{
				[`.${sidebarClasses.container}`]: {
					height: "100vh",
					background: "black",
					color: "white",
				},
			}}
		>
			<Menu>
        <MenuItem>Image</MenuItem>
				<MenuItem>Documentation</MenuItem>
				<MenuItem>Calendar</MenuItem>
			</Menu>
		</Sidebar>
	);
}

export default SideBar;
