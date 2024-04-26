import { useState } from "react";
import { Rating } from "react-simple-star-rating";

function StarRating() {
	const [rate, setRate] = useState(false);
	return (
		<Rating
			onClick={setRate.bind(rate, !rate)}
			iconsCount={1}
			size={25}
			className="mt-3"
			fillColor="#74c0fc"
			initialValue={rate}
		></Rating>
	);
}

export default StarRating;
