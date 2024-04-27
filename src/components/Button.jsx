import { useTheme } from "../contexts/ThemeController";

/* eslint-disable react/prop-types */
function Button({ children, textColor, event }) {
	const { theme } = useTheme();
	return (
		<button
			className={`relative overflow-hidden rounded-md bg-white px-5 py-2.5 ${
				textColor || "text-blue-600" 
			} font-semibold duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90 border shadow-md`}
			onClick={event}
		>
			{children}
		</button>
	);
}

export default Button;
