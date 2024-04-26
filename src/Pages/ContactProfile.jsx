import Button from "../components/Button";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";

function ContactProfile() {
	const profile = useLoaderData();
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
					src={profile.photo}
					alt="person name"
					className="lg:w-1/3 md:w-1/2 rounded-full"
				/>
				<figcaption>
					<ProfileHeader fullName={`${profile.First} ${profile.Last}`} />

					<div className="*:flex *:items-center *:gap-3 bg-[#F0F4F9] rounded-lg p-6 mb-5 first:*:text-xl first:*:font-medium mt-5 space-y-3 text-lg">
						<h3>Contact details</h3>
						<p>
							<CiMail />
							<span>{profile.email}</span>
						</p>
						<p>
							<CiPhone />
							<span>{profile.phone}</span>
						</p>
						<p>
							<MdFavoriteBorder />
							<span>{profile.message}</span>
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

export default ContactProfile;
