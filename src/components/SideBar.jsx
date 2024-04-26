/* eslint-disable react/prop-types */
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
// import { slide as Menu } from "react-burger-menu";
// import { IoMenu } from "react-icons/io5";
// import { IoIosClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

function SideBar({ contacts }) {
	const navigate = useNavigate();
	return (
		<Sidebar
			width="auto"
			rootStyles={{
				[`.${sidebarClasses.container}`]: {
					backgroundColor: "#F7F7F7",
					height: "100vh",
				},
				[`.${sidebarClasses.container} > *:not(:first-of-type)`]: {
					padding: "0px 20px",
					borderRadius: "4px",
				},
			}}
			collapsed={false}
			collapsedWidth="10px"
			className="relative"
		>
			<div className="flex items-center border-b-2 pb-10 lg:py-5 px-4 mb-4">
				<input
					type="text"
					placeholder="Search"
					className="py-2.5 rounded-lg px-4 mr-4 outline-none border shadow-sm"
				/>
				<Link to="/add-new-contact">
					<Button>New</Button>
				</Link>
			</div>
			<Menu
				menuItemStyles={{
					button: ({ level, active, disabled }) => {
						if (level === 0)
							return {
								color: disabled ? "#f5d9ff" : "#d359ff",
								backgroundColor: active ? "red" : undefined,
							};
					},
				}}
			>
				{contacts.map((contact) => (
					<MenuItem
						onClick={() => navigate(`/contacts/${contact._id}`)}
						key={contact._id}
					>
						{contact.First} {contact.Last}
					</MenuItem>
				))}
			</Menu>
			<figure className="absolute !flex text-xl font-semibold gap-3 bottom-0 left-0 w-full !py-4 border-t-2 justify-center">
				<img src="../react-router.svg" alt="react router icon" className="w-12" />
				<figcaption>React Router Contacts</figcaption>
			</figure>
		</Sidebar>
	);
}

// function SideBar() {
// 	const [open] = useState(true);
// 	return (
// 		<Menu
// 			className="h-screen pt-12 lg:p-0 bg-[#F7F7F7] *:px-4"
// 			width={350}
// 			isOpen={open}
// 			pageWrapId={"page-wrap"}
// 			outerContainerId={"outer-container"}
// 		>
// 			<div className="flex items-center border-b-2 border-white pb-10 lg:py-8">
// 				<input
// 					type="text"
// 					placeholder="Search"
// 					className="py-2.5 rounded-lg px-4 mr-4 outline-none border shadow-sm"
// 				/>
// 				<Button />
// 			</div>
// 			<Link className="menu-item">Contact</Link>
// 			<figure className="absolute !flex text-xl font-semibold gap-3 bottom-0 w-full py-4 border-t-2 -translate-x-4 justify-center">
// 				<img src="react-router.svg" alt="react router icon" className="w-12" />
// 				<figcaption>React Router Contacts</figcaption>
// 			</figure>
// 		</Menu>
// 	);
// }

export default SideBar;
