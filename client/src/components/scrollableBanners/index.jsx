import {useEffect} from "react";
import Banner from "../banner";
import SlickComponent from "../common/slickComponent";
import { useSelector, useDispatch } from 'react-redux'
import {getBannersAction} from "../../actions/actionHome";
import './styles.scss';

const ScrollableBanners = () => {

	const dispatch = useDispatch()
	const {bannerData} = useSelector((state)=>state.home)


	useEffect(()=>{
		dispatch(getBannersAction())
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<div className="scrollable-banner-wrapper">
		<SlickComponent>
			{
				bannerData?.map(({id, ...item}) => (
					<Banner key={id} details={item} />
				))
			}
		</SlickComponent>
		</div>
	);
};

export default ScrollableBanners;