// import { Link } from "react-router-dom"
import { SelectedCategory } from "./SelectedCategory"
import { useContext,useState } from "react"
import { DataContext } from "..//../App"
import { useEffect } from "react"

export const AllProduct =({handleAddToCart})=>{
    const data = useContext(DataContext);
    // console.log(data)
    let dataArray;

    data ? dataArray = Object.keys(data) : dataArray = null;
  const [SelectedCategoryData,setSelectedCategoryData] = useState([]);  
  useEffect(
    ()=>{
        if (data != null){setSelectedCategoryData(data.Couch) }
    },[data]
  )
 
 const handleProductCategory = (key)=>{
        setSelectedCategoryData(data[key])
 }

    return(
        <>
        <div>
            <ul>
                {data ? dataArray.map(
                    (key)=><li key={dataArray.indexOf(key)} ><a onClick={()=>{handleProductCategory(key)}}>{key}</a></li>) 
                    : ''}
            </ul>
        </div>
        {<SelectedCategory categoryData={SelectedCategoryData} handleAddToCart={handleAddToCart}/>}
        </>
    )
}