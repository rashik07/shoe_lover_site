import React from "react";
import 'antd/dist/antd.css';
import { Typography } from 'antd';
const Header = () => {
    const { Text, Link } = Typography;
    return (
        <>
            <Typography.Title type="success" level={1} style={{ margin: 0 }}>
                Shoe Lover
            </Typography.Title>
            <Typography.Title  level={4} style={{ margin: 0 }}>
                Choose 4 Clothes
            </Typography.Title>


        </>
    );
};

export default Header;