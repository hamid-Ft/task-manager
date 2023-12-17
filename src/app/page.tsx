"use client";
import React, { useState } from "react";
import { Button, Checkbox, ConfigProvider, Form, Input, Modal } from "antd";

import theme from "../theme/antd-config";
import Title from "antd/es/typography/Title";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    title?: string;
    description?: string;
    low?: string;
    medium?: string;
    high?: string;
  };

  return (
    <ConfigProvider theme={theme}>
      <div className="grid grid-rows-3 place-items-center justify-center items-center">
        <Title>Task Manager</Title>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Create New Task"
          open={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}>
              Submit
            </Button>,
            <Button
              key="link"
              href="https://google.com"
              type="primary"
              loading={loading}
              onClick={handleOk}>
              Search on Google
            </Button>,
          ]}>
          <Form
            name="Create Task"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item<FieldType>
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please input Title!" }]}>
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input description!" },
              ]}>
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              name="low"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Low</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <div>TaskList Component</div>
      </div>
    </ConfigProvider>
  );
};

export default HomePage;
