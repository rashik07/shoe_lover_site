import React from "react";
import 'antd/dist/antd.css';
import { Card, Col, Button  } from 'antd';
import {
    ShoppingCartOutlined
  } from '@ant-design/icons';
const Product = (props) => {
    const { Meta } = Card;
    const {name,img,price}=props.product;

    return (
        <>
         
                <Col span={8}>
              
                <Card
                    
                    style={{ width: 240,margin:"10px 0px" }}
                    cover={<img alt="example" src={img} />}
                   
                >
                    <Meta title={name}  />
                    <h4>Price:{price}</h4>
                    <Button type="primary" onClick={()=>props.handleAddToCard(props.product)}>ADD TO CART <ShoppingCartOutlined /></Button>
                </Card>
                </Col>
               



        </>
    );
};

export default Product;