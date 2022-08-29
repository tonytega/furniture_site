// import { Link } from "react-router-dom"
import { BedProduct } from "./BedProduct"
import { useContext } from "react"
import { DataContext } from "..//../App"
import { Category } from "@mui/icons-material"
import { useEffect } from "react"
// import { uuid} from 'uuidv4'


export const AllProduct =()=>{
    const data = useContext(DataContext);

    return(
        <>
        <div>
            <ul>
                {data ? Object.keys(data).map((key)=><li>{key}</li>) : ''}
            </ul>
        </div>
        <BedProduct/>
        </>
    )
}