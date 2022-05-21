import React from "react";
import 'antd/dist/antd.css';
import { Typography } from 'antd';
const Ques_ans = () => {
    const { Text, Link, Paragraph } = Typography;
    return (
        <>
            <div style={{margin:"50px"}}>
                <Typography.Title level={1} style={{ margin: 0 }}>
                    How useState work?
                </Typography.Title>
                <Paragraph level={4} style={{ margin: 0 }}>
                    useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.
                </Paragraph>
                <Typography.Title level={1} style={{ margin: 0 }}>
                    Props vs state
                </Typography.Title>
                <Paragraph level={4} style={{ margin: 0 }}>
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                </Paragraph>
            </div>



        </>
    );
};

export default Ques_ans;