import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Product from "./Product";
const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    return (
        <>

            <Row>
                <Col span={18}>
                <Row>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                    </Row>
                </Col>
                <Col span={6}>
                    this is order summary
                </Col>
            </Row>

        </>
    );
};

export default Shop;