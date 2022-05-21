import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Row, Col, Button,List} from 'antd';
import { Typography } from 'antd';
import Product from "./Product";
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const { Text, Link, Paragraph } = Typography;
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleAddToCard = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);

    }
    const randomItem=cart[Math.floor(Math.random()*cart.length)];
    const handleSelect = () => {

        // const newCart = [...cart, product];
        console.log(randomItem);
        const newCart = [ randomItem];
        setCart(newCart);

    }
    const handleChooseAgain = () => {

        // const newCart = [...cart, product];
        console.log(randomItem);
        // const newCart = [ randomItem];
        setCart([]);

    }
    return (
        <>

            <Row>
                <Col span={20}>
                    <Row>
                        {
                            products.map(product => <Product key={product.id} product={product} handleAddToCard={handleAddToCard}></Product>)
                        }
                    </Row>
                </Col>
                <Col span={4} style={{ backgroundColor: "#d0d7de", padding: 10 }}>
                    <Typography.Title level={4} style={{ margin: 0 }}>
                        Selected Clothes
                    </Typography.Title>

                    {
                        cart.map(cardProduct => <List level={5} style={{ paddingTop: "3px", float: "left" }}>-{cardProduct.name}</List>)
                    }
                    
                    <Button type="primary" onClick={()=>handleSelect()} >CHOOSE 1 FOR ME </Button>
                    <Button type="primary" onClick={()=>handleChooseAgain()} ghost>CHOOSE AGAIN </Button>
                </Col>
            </Row>

        </>
    );
};

export default Shop;