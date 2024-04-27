import { useState } from "react";
import Select from "react-select";

const options = [
	{ value: "all", label: "All" },
	{ value: "favourite", label: "Favorite" },
];

function Selection() {
	const [selectedOption, setSelectedOption] = useState(null);

	return (
		<div className="col-span-2">
			<Select
				defaultValue={selectedOption}
				onChange={setSelectedOption}
				options={options}
				isClearable={true}
				isSearchable={true}
				styles={{
					control: (baseStyles) => ({
						...baseStyles,
						height: "45px",
					}),
				}}
			/>
		</div>
	);
}

export default Selection;
