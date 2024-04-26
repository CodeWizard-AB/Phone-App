import form from "../constant";
import Label from "../components/Label";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

function Form() {
	return (
		<div className="py-10 px-16 max-w-screen-lg h-min">
			<BackButton />
			<form
				className="grid grid-cols-[auto_1fr_1fr] items-center gap-5 mt-5"
				onSubmit={(e) => e.preventDefault()}
			>
				{form.map((element) => (
					<Label key={Date.now()} element={element} />
				))}
				<label htmlFor="message" className="text-lg font-medium">
					Notes
				</label>
				<textarea
					name="message"
					id="message"
					className="border col-span-2 shadow-md outline-none rounded-lg p-4"
					placeholder="Write Notes"
				></textarea>
				<div className="flex gap-4 col-start-2">
					<Button>Add</Button>
					<Button textColor="black">Cancel</Button>
				</div>
			</form>
		</div>
	);
}

export default Form;
