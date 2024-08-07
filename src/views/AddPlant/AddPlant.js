import React, { useState } from "react";
import "./AddPlant.css"
import toast ,{Toaster}from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

function AddPlant(){
         const [names,setName]=useState("")
         const[category,setCategory]=useState("")
         const[price,setPrice]=useState("")
         const[image,setImage]=useState("")
         const[description,setDescription]=useState("")

         const addPlant=async ()=>{
            toast.loading("Adding plant...")
            if(!names||!category||!price||!image||!description){
                toast.error("please enter all details")
                return
            }
            const response =await axios.post(`${process.env.REACT_APP_API_URL}/plant`,{
                names:names,
                price:price,
                category:category,
                image:image,
                description:description
                
            })

            toast.dismiss()
            toast.success(response.data.message)

            setName("")
            setCategory("")
            setPrice("")
            setImage("")
            setDescription("")
            
         }

    return(
        <div>
         <h1>AddPlant</h1>
         <form>
            <input
            type='text'
            placeholder='enter plant name'
            value={names}
            onChange={(e)=>setName(e.target.value)}
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
                 
                 <img src={image} className="img-preview"/>
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

            <button type="button" onClick={addPlant}>Add Plant</button>
         </form>
         <br/>
         <br/>
         <Link to="/">showAll plant</Link>
         <Toaster/>
        </div>
    )
}
export default AddPlant