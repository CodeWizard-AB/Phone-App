import Button from "../components/Button";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import Swal from "sweetalert2";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";

function ContactProfile() {
	const profile = useLoaderData();
	const navigate = useNavigate();
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
				fetch(`http://localhost:5000/contacts/${profile._id}`, {
					method: "DELETE",
				}).then(() => {
					Swal.fire({
						title: "Deleted!",
						text: "Your contact has been deleted.",
						icon: "success",
						confirmButtonColor: "#3085d6",
					}).then((result) => {
						result.isConfirmed && navigate("/");
					});
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
							<IoMailOutline />
							<span>{profile.email}</span>
						</p>
						<p>
							<IoCallOutline />
							<span>{profile.phone}</span>
						</p>
						<p>
							<MdFavoriteBorder />
							<span>{profile.message}</span>
						</p>
					</div>

					<div className="flex gap-4">
						<Link to={`/contacts/${profile._id}/profile`}>
							<Button>Edit</Button>
						</Link>
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
