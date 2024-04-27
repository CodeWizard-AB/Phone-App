/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = function ({ children }) {
	const [theme, setTheme] = useState("light");
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = function () {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("Theme is called outside");
	return context;
};

export { useTheme, ThemeProvider };
