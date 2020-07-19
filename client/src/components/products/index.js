import React, { useState, useEffect } from 'react';
import './style.css'

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function fetchListProducts(){
            try {

                const endPoint = "/api/products"
                const respond = await fetch(endPoint)
                const respondData= await respond.json()

                setProducts(respondData)
            } catch (error) {

                console.log("Failed to fetch..." + error.message)
            }
        }

        fetchListProducts()
    }, []);

    return (
        <div className="container">
            <table className="products">
                <thead className="product__column">
                    <tr>
                        <th className="product__key">ID</th>
                        <th className="product__key">Name</th>
                        <th className="product__key">Price</th>
                    </tr>
                </thead>
                <tbody className="product__row">
                    { products.map(product =>
                        <tr key={product.p_id}>
                            <td>{product.p_id}</td>
                            <td>{product.p_name}</td>
                            <td>{product.p_price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Products;