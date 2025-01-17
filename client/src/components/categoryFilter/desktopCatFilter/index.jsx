import "./styles.scss";
import {useDispatch, useSelector} from 'react-redux';
import MuiButton from '../../common/muiButton';
import {changecategoryId} from "../../../reducers/homeReducer";
import {sortProductData} from "../../../reducers/productReducer";


const DesktopCatFilter = () => {


  const dispatch = useDispatch()
  const {categoryData, categoryId} = useSelector((state)=> state.home)


  const onClickHandler = (id) => {
    dispatch(changecategoryId(id))
    dispatch(sortProductData(id))
  }



  
  return ( 
    <div role="list" className="desktopfilter-wrapper">
      {categoryData.map(({name, id})=> <div role="listitem" key={id} className={`desktopfilter-container  ${id === categoryId ? `desktopfilter-container-active` : `` } `} >
        < MuiButton  onClick = {()=>onClickHandler(id)} color="secondary" variant="link" fullWidth  key={id} value={id}>{name}</MuiButton></div> )}
    </div>
   );
}
 
export default DesktopCatFilter;