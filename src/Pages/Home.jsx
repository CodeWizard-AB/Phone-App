import Button from "../components/Button";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import StarRating from "../components/StarRating";
import { MdFavoriteBorder } from "react-icons/md";
import Swal from "sweetalert2";

function Home() {
	const handleDelete = function () {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Deleted!",
					text: "Your contact has been deleted.",
					icon: "success",
					confirmButtonColor: "#3085d6",
				});
			}
		});
	};

	return (
		<main className="py-14 px-20">
			<figure className="flex lg:flex-row flex-col lg:gap-14 gap-5 items-center">
				<img
					src="https://mighty.tools/mockmind-api/content/human/57.jpg"
					alt="person name"
					className="lg:w-1/3 md:w-1/2 rounded-full"
				/>
				<figcaption>
					<div className="flex gap-3 items-center">
						<h2 className="font-bold text-4xl">Henri Helvetica </h2>
						<StarRating />
					</div>

					<div className="*:flex *:items-center *:gap-3 bg-[#F0F4F9] rounded-lg p-6 mb-5 first:*:text-xl first:*:font-medium mt-5 space-y-3 text-lg">
						<h3>Contact details</h3>
						<p>
							<CiMail />
							<span>name@gmail.com</span>
						</p>
						<p>
							<CiPhone />
							<span>01988339922</span>
						</p>
						<p>
							<MdFavoriteBorder />
							<span>Ice Cream</span>
						</p>
					</div>

					<div className="flex gap-4">
						<Button>Edit</Button>
						<Button textColor="text-red-700" event={handleDelete}>
							Delete
						</Button>
					</div>
				</figcaption>
			</figure>
		</main>
	);
}

export default Home;
