import Button from "../components/Button";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

function Home() {
	return (
		<main className="py-14 px-20">
			<figure className="flex gap-10">
				<img
					src="https://mighty.tools/mockmind-api/content/human/57.jpg"
					alt="person name"
					className="w-1/3 rounded-3xl"
				/>
				<figcaption>
					<h2 className="font-bold text-4xl">Henri Helvetica</h2>

					<div className="*:flex *:items-center *:gap-3 bg-[#F0F4F9] rounded-lg p-4 mb-5 first:*:text-xl first:*:font-medium mt-5 space-y-3 text-lg">
						<h3>Contact details</h3>
						<p>
							<CiMail />
							<span>name@gmail.com</span>
						</p>
						<p>
							<CiPhone />
							<span>01988339922</span>
						</p>
					</div>

					<div className="flex gap-4">
						<Button>Edit</Button>
						<Button textColor="text-red-700">Delete</Button>
					</div>
				</figcaption>
			</figure>
		</main>
	);
}

export default Home;
