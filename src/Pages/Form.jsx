import form from "../constant";
import Label from "../components/Label";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import Swal from "sweetalert2";

function Form() {
	const handleSumbit = function (e) {
		e.preventDefault();
		const newContact = {};
		[...e.target].slice(0, -1).forEach((item) => {
			newContact[item.id] = item.value;
			item.value = "";
		});
		fetch("http://localhost:5000/contacts", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(newContact),
		}).then(() => {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Your contact has been saved",
				showConfirmButton: false,
				timer: 1500,
			});
		});
	};
	return (
		<div className="py-10 px-16 max-w-screen-lg h-min">
			<BackButton to="/" />
			<form
				className="grid grid-cols-[auto_1fr_1fr] items-center gap-5 mt-5"
				onSubmit={handleSumbit}
			>
				{form.map((element, i) => (
					<Label key={i} element={element} />
				))}
				<label htmlFor="message" className="text-lg font-medium">
					Notes
				</label>
				<textarea
					name="message"
					id="message"
					className="border col-span-2 shadow-md outline-none rounded-lg p-4"
					placeholder="Favourite Food..."
				></textarea>
				<div className="col-start-2">
					<Button>Add</Button>
				</div>
			</form>
		</div>
	);
}

export default Form;
