import { Link, useParams } from "react-router-dom"
import "./UpdatePlant.css"
import React,{useEffect, useState} from 'react'
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";


function UpdatePlant() {
    const { id } = useParams();
    const [names, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
   
   const updatePlant=async()=>{
    const response=await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`,
  {
     names:names,
    price:price,
    description:description,
    category:category,
    image:image
   })
    
    toast.success(response.data.message)
   }
const loadPlant=async(id)=>{
     if(!id){
     return
     }
     
    const response =await axios.get(`${process.env.REACT_APP_API_URL}/plants${id}`)

    const plantData = response.data.data

    const{names,image,price,category,description}=response.data.data

    setName(names)
    setImage(image)
    setPrice(price)
    setCategory(category)
    setDescription(description)
}

   useEffect(()=>{

       loadPlant(id)
    
   },[id])
    
    return (
        <div>
            <h1>update plant:{id}</h1>
            
            <form>
                <input
                    type='text'
                    placeholder='enter plant name'
                    value={names}
                    onChange={(e) => setName(e.target.value)}
                    className="plant-input"
                />
                <input
                    type="text"
                    placeholder="enter plant category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="plant-input"
                />


                <input
                    type='number'
                    placeholder='enter plant price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="plant-input"
                />

                <img src={image} className="img-preview" />
                <input
                    type="text"
                    placeholder="enter plant image url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="plant-input"
                />


                <input
                    type="text"
                    placeholder="enter plant description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="plant-input"
                />

                <button type="button" onClick={UpdatePlant}>Add Plant</button>
            </form>
            <Link to="/">Show All Plants</Link>
            <Toaster/>
        </div>
    )

}
export default UpdatePlant