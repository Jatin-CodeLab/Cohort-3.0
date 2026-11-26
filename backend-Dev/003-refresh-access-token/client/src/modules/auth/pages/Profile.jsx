import { User, Mail, ShieldCheck, LogOut } from "lucide-react";
import { useAuthContext } from "../context/AuthProvider";
import { useEffect } from "react";
import useApi from "../../shered/useApi";

function Profile() {

  const authContext = useAuthContext()
  const api = useApi()
  
  async function fetchProfile() {
		const response = await api.get("/auth/me");
		authContext.setUser(response.data.data.user);
	}
  
  useEffect(() => {
    fetchProfile()
  }, [])
  
  
	return (
		<main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
				<div className="h-32 bg-blue-600"></div>

				<div className="px-6 pb-8">
					<div className="flex justify-center -mt-14">
						<div className="w-28 h-28 rounded-full bg-white p-1 shadow-md">
							<div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
								<User size={48} className="text-blue-600" />
							</div>
						</div>
					</div>

					<div className="text-center mt-4">
						<h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
						<p className="text-gray-500 text-sm mt-1">
							Welcome to your profile
						</p>
					</div>

					<div className="mt-8 space-y-4">
						<div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
							<User className="text-blue-600" size={22} />
							<div>
								<p className="text-xs text-gray-500">
									{authContext.user?.name}
								</p>
							</div>
						</div>
					</div>
					<div className="mt-8 space-y-4">
						<div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
							<Mail className="text-blue-600" size={22} />
							<div>
								<p className="text-xs text-gray-500">
									{authContext.user?.email}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Profile;
