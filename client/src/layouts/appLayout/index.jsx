import {useSelector} from "react-redux";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import Loader from "../../components/common/loader";
import ScrollToTop from "../../components/common/scrollToTop";

import "../../global.scss";



const AppLayout = ({children}) => {

	const {isLoading} = useSelector((state) => state.app);

	return (
		<div className="root">
			<Header id="scroll-to-top"  />
			{isLoading && <Loader />}
			<main  className="main-container">
			{children}
			</main>
			<ScrollToTop href = "#scroll-to-top"  />
			<Footer />
		</div>
	);
};

export default AppLayout;