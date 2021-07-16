import React,{useState,useEffect} from "react"
import { getProducts } from "./helper/coreapicalls"
import { cleanup } from "@testing-library/react";
import Base from "./Base";
import "../styles.css";

import ImageHelper from "./helper/imagehelper";
import Card from "./Card";

export default function Home(){
    
    const [products,setProducts]=useState([]);
    const [error,setError]=useState(false)
    const loadAllProducts = () => {
        getProducts()
        .then(data =>{
            if(data.error){
                setError(data.error);
                console.log(error);
            }
            else{
                setProducts(data);

            }
        });

    };
    useEffect(() => {
        loadAllProducts(); 
    });

    return(
        <Base title="Home page" description="Welcome to Cake store">
            <h1>Cake List</h1>
            <div className="row">
                {products.map((product,index) => {
                    return(
                        <div key={index} className="col-4 mb-4">
                            <Card product={product}/>
                        </div> 
                        
                    );

                })}
            </div>
        </Base>
        

    );
}