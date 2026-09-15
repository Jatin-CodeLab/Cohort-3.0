import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { Outlet } from "react-router";

function MainLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-[#0d0d0d] items-center justify-center" >
			<Header />

			<main className=" flex-1 items-center justify-center">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}

export default MainLayout;
