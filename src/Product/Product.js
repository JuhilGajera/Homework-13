import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = ({ id }) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            console.log('res====>>>', res)
            setProduct(res.data)
        }).catch((err) => {
            console.log('err==>>', err)
        });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <img src={product.image} alt={product.title} style={{height:200,width:200}} />
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate} out of 5</p>
        </div>
    );
};

export default Product;
