import PlantCard from "../../components/PlantCard/PlantCard"
import "./Home.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import toast,{Toaster } from "react-hot-toast"
import ImgAdd from "./add.png"
import { Link } from "react-router-dom"

function Home(){
     const[plants,setPlants]=useState([])

   const loadPlants = async() => {
        toast.loading("Loading plants....")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)

        toast.dismiss()
        toast.success("plants loaded successfully")

        setPlants(response.data.data)
        }

    useEffect(()=>{
        loadPlants()
   },[]) 

    return(
        <>
        <div>
             <h1>Plants</h1>
             {
                plants.map((plant,i)=>{
                    const{
                        id,
                        names,
                        category,
                        price,
                        image,
                    description}=plant

                    return(<PlantCard
                    key={i}
                    _id={id}
                    names={names}
                    catergory={category}
                    price={price}
                    image={image}
                    description={description}
                    loadPlants={loadPlants}
                    />)
                })
             }
             <Toaster/>
             <Link to="/add">
             <img src={ImgAdd} className="btn-add"/>
             </Link>
             <Toaster/>
        </div >
    
        </>
    )

}
export default Home