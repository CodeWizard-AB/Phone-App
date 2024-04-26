/* eslint-disable react/prop-types */
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

function ProfileHeader({ fullName }) {
	const [rate, setRate] = useState(false);
	return (
		<div className="flex gap-3 items-center">
			<h2 className="font-bold text-4xl">{fullName}</h2>
			<Rating
				onClick={setRate.bind(rate, !rate)}
				iconsCount={1}
				size={25}
				className="mt-3"
				fillColor="#74c0fc"
				initialValue={rate}
			></Rating>
		</div>
	);
}

export default ProfileHeader;
