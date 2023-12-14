import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { gql, useMutation, useQuery } from "@apollo/client";

const GET_TODO = gql`
  mutation AllToDo($name: String!) {
    AllToDo {
      name
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_TODO);

  //   const onFinish = (values) => {
  //     console.log(values);

  //   };

  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };

  console.log(loading, error, data);

  return (
    <Row style={{ padding: "2rem" }}>
      <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
        {JSON.stringify(data)}
        {/* <Form
          layout="inline"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="todo"
            rules={[
              {
                required: true,
                message: "Please input your Todo!",
              },
            ]}
          >
            <Input />
          </Form.Item>-

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form> */}
      </Col>
    </Row>
  );
};
export default Home;
