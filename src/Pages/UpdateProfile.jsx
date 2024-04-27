import form from "../constant";
import Label from "../components/Label";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function UpdateProfile() {
	const [profile, setProfile] = useState(useLoaderData());
	const navigate = useNavigate();
	const formRef = useRef();

	const handleUpdate = function () {
		const updatedContact = {};
		[...formRef.current.children].forEach((item) => {
			if (item.tagName === "INPUT" || item.tagName === "TEXTAREA")
				updatedContact[item.id] = item.value;
		});
		fetch(`http://localhost:5000/contacts/${profile._id}`, {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(updatedContact),
		}).then(() => {
			navigate(-1);
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Your contact has been updated",
				showConfirmButton: false,
				timer: 1500,
			});
		});
	};

	const handleCancel = function () {
		setProfile((profile) => profile);
	};

	return (
		<div className="py-10 px-16 max-w-screen-lg h-min">
			<div className="grid grid-cols-[100px_1fr]">
				<BackButton to={-1} />
				<figure>
					<img
						src={profile.photo}
						alt={profile.Last}
						className="w-1/4 rounded-full mx-auto"
					/>
				</figure>
			</div>

			<form
				ref={formRef}
				className="grid grid-cols-[auto_1fr_1fr] items-center gap-5 mt-5"
				onSubmit={(e) => e.preventDefault()}
			>
				{form.map((element, i) => (
					<Label key={i} element={element} profile={profile} />
				))}
				<label htmlFor="message" className="text-lg font-medium">
					Notes
				</label>
				<textarea
					name="message"
					id="message"
					className="border col-span-2 shadow-md outline-none rounded-lg p-4"
					placeholder="Favourite Food..."
					defaultValue={profile.message}
				></textarea>
				<div className="col-start-2 space-x-4">
					<Button event={handleUpdate}>Save</Button>
					<Button textColor="text-black" event={handleCancel}>
						Cancel
					</Button>
				</div>
			</form>
		</div>
	);
}

export default UpdateProfile;
