import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit , reset} = useForm();

  const onSubmit = data =>{
         console.log(data);

         axios.post('http://localhost:5000/products', data)
         .then(res => {
             if(res.data.insertedId){
                 alert('Product Added Successfully');
                 reset();
             }
         })
  } 
    return (
        <div id="addProduct" className="add-product">
        <h2 className="text-white">Add Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required="name"/>
        <textarea {...register("description")} placeholder="Description" required="description"/>
        <input type="number" {...register("price")} placeholder="Price" required="price"/>
        <input {...register("image")} placeholder="Image" required="image Url" />
        <input type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;