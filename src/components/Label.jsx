/* eslint-disable react/prop-types */
function Label({ element: { label, type, list } }) {
	return (
		<>
			<label htmlFor={label} className="font-medium text-lg w-40">
				{label}
			</label>
			{list.map((item) => (
				<input
					type={type}
					id={label}
					key={Date.now()}
					placeholder={item}
					className={`${
						list.length === 1 && "col-span-2"
					} border shadow-md rounded-lg py-3 outline-none px-4`}
				/>
			))}
		</>
	);
}

export default Label;
