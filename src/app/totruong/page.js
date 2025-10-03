"use client";

import React from "react";
import AppHeader from "@/components/AppHeader";
import {
  Card,
  Space,
  Input,
  Select,
  Button,
  Table,
  Tag,
  Pagination,
  Row,
  Col,
  Tabs,
  Typography,
} from "antd";
import {
  PlusOutlined,
  UserOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function HomePage() {
  const data = [
    {
      key: "HK001",
      id: "HK001",
      name: "Nguyễn Văn A",
      address: "123 Đường ABC, Phường 1",
      members: 4,
      status: "Hoạt động",
    },
    {
      key: "HK002",
      id: "HK002",
      name: "Trần Thị B",
      address: "456 Đường DEF, Phường 2",
      members: 3,
      status: "Hoạt động",
    },
  ];

  const columns = [
    { title: "Mã hộ khẩu", dataIndex: "id", key: "id" },
    { title: "Chủ hộ", dataIndex: "name", key: "name" },
    { title: "Địa chỉ", dataIndex: "address", key: "address" },
    { title: "Số thành viên", dataIndex: "members", key: "members" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Hoạt động" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EyeOutlined style={{ cursor: "pointer" }} />
          <EditOutlined style={{ cursor: "pointer" }} />
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </Space>
      ),
    },
  ];

  return (
    <>
      <AppHeader />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* Title + Desc */}
          <div>
            <Title level={2}>Quản lý Khu dân cư</Title>
            <Text type="secondary">
              Quản lý thông tin hộ khẩu, nhân khẩu và thống kê dân cư
            </Text>
          </div>

          {/* Tabs */}
          <Tabs defaultActiveKey="hokhau">
            <Tabs.TabPane tab="Quản lý hộ khẩu" key="hokhau" />
            <Tabs.TabPane tab="Quản lý nhân khẩu" key="nhankhau" />
            <Tabs.TabPane tab="Quản lý tạm trú tạm vắng" key="tamvang" />
            <Tabs.TabPane tab="Thống kê dân cư" key="thongke" />
          </Tabs>

          {/* Filter + Table */}
          <Card>
            <Space
              direction="horizontal"
              style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}
            >
              <Space size="middle" style={{ flex: 1 }}>
                <Input placeholder="Nhập tên chủ hộ..." />
                <Select
                  placeholder="Khu vực"
                  style={{ width: 150 }}
                  options={[{ value: "all", label: "Tất cả khu vực" }]}
                />
                <Select
                  placeholder="Trạng thái"
                  style={{ width: 150 }}
                  options={[{ value: "all", label: "Tất cả" }]}
                />
                <Button type="primary">Tìm kiếm</Button>
              </Space>
              <Button icon={<PlusOutlined />} type="primary">
                Thêm hộ khẩu
              </Button>
            </Space>

            <Table columns={columns} dataSource={data} pagination={false} />

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
              <Pagination total={3} defaultCurrent={1} />
            </div>
          </Card>

          {/* Stats */}
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card>
                <Space>
                  <TeamOutlined style={{ fontSize: 28 }} />
                  <div>
                    <Text>Tổng hộ khẩu</Text>
                    <Title level={3}>1,234</Title>
                  </div>
                </Space>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Space>
                  <UserOutlined style={{ fontSize: 28 }} />
                  <div>
                    <Text>Tổng nhân khẩu</Text>
                    <Title level={3}>4,567</Title>
                  </div>
                </Space>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Space>
                  <EnvironmentOutlined style={{ fontSize: 28 }} />
                  <div>
                    <Text>Tạm trú</Text>
                    <Title level={3}>89</Title>
                  </div>
                </Space>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Space>
                  <ExclamationCircleOutlined style={{ fontSize: 28, color: "orange" }} />
                  <div>
                    <Text>Cần xử lý</Text>
                    <Title level={3}>12</Title>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </Space>
      </div>
    </>
  );
}
