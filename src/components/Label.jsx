/* eslint-disable react/prop-types */
function Label({ element: { label, type, list, id }, profile }) {
	return (
		<>
			<label htmlFor={list.length > 1 ? list[0] : id} className="font-medium text-lg w-40">
				{label}
			</label>
			{list.map((item, i) => (
				<input
					type={type}
					id={list.length === 1 ? id : item}
					key={i * 2}
					placeholder={item}
					required={true}
					className={`${
						list.length === 1 && "col-span-2"
					} border shadow-md rounded-lg py-3 outline-none px-4`}
					defaultValue={profile?.[list.length === 1 ? id : item] || ""}
				/>
			))}
		</>
	);
}

export default Label;
