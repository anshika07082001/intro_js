import {
  Button,
  Card,
  FlexLayout,
  Grid,
  Modal,
  PageHeader,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useState } from "react";

const BodyComp = () => {
  let [openmodal, setOpenModal] = useState(false);
  let column = [
    {
      align: "center",
      dataIndex: "name",
      key: "name",
      title: "Name",
      width: 100,
    },
    {
      align: "center",
      dataIndex: "age",
      key: "age",
      title: "Age",
      width: 100,
    },
    {
      align: "center",
      dataIndex: "address",
      key: "address",
      title: "Address",
      width: 100,
    },
  ];
  let data = [
    {
      address: "10 Downing Street",
      age: 32,
      key: "1",
      name: "Mike",
    },
    {
      address: "10 Downing Street",
      age: 42,
      key: "2",
      name: "John",
    },
    {
      address: "10 Downing Street",
      age: 32,
      key: "3",
      name: "Mike",
    },
    {
      address: "10 Downing Street",
      age: 42,
      key: "4",
      name: "John",
    },
    {
      address: "10 Downing Street",
      age: 32,
      key: "5",
      name: "Mike",
    },
    {
      address: "10 Downing Street",
      age: 42,
      key: "6",
      name: "John",
    },
    {
      address: "10 Downing Street",
      age: 32,
      key: "7",
      name: "Mike",
    },
    {
      address: "10 Downing Street",
      age: 42,
      key: "8",
      name: "John",
    },
    {
      address: "10 Downing Street",
      age: 32,
      key: "7",
      name: "Mike",
    },
    {
      address: "10 Downing Street",
      age: 42,
      key: "8",
      name: "John",
    },
    {
      address: "10 Downing Street",
      age: 32,
      key: "7",
      name: "Mike",
    },
    {
      address: "10 Downing Street",
      age: 42,
      key: "8",
      name: "John",
    },
  ];
  return (
    <FlexLayout direction="vertical" desktopWidth="75%">
      <Card extraClass="margin--card" cardType="Subdued">
        <PageHeader
          title="Dashboard"
          description="Lorem ipsum sell and mang simply dummy text of the printing and typescripting  a the industry."
        />
        <Grid columns={column} dataSource={data} />
      </Card>
      <Button onClick={() => setOpenModal(!openmodal)}>Model</Button>
      <Modal
        open={openmodal}
        close={() => setOpenModal(!openmodal)}
        heading="Modal Title"
        modalSize="small"
        overlayClose
      >
        <TextStyles type="Paragraph">
          lorem ipsum is an df jdff jtnv jdsiwew jfdfd jdfdf djds
        </TextStyles>
      </Modal>
    </FlexLayout>
  );
};

export default BodyComp;
