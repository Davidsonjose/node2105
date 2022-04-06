import React from "react";
import { Card, ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
// import env from "react-dotenv";

function AllProducts() {
  const [product, setProduct] = useState(null);
  const [err, setErr] = useState(null);
  const [category, setCategory] = useState(null);

  const productUrl = "/product/all-product";
  useEffect(() => {
    axios
      .get(productUrl)
      .then(({ data }) => {
        // console.log(data);
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productUrl]);
  console.log(product);
  const categoryUrl = "/category/all-category";
  useEffect(() => {
    axios
      .get(categoryUrl)
      .then(({ data }) => {
        setCategory(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryUrl]);
  // console.log(process.env.SERVER_URL);
  return (
    <>
      <Row>
        <Col md={4}>
          <div className="container">
            <Card style={{ width: "18rem" }} className="mt-5">
              <h4 className="text-center">Categories</h4>
              {category?.map((data) => {
                return (
                  <>
                    <ListGroup variant="flush">
                      <ListGroup.Item>{data?.title}</ListGroup.Item>
                    </ListGroup>
                  </>
                );
              })}
            </Card>
          </div>
        </Col>
        <Col md={8}>
          <div className="mt-5">
            <h1 className="text-center m-5">All Product</h1>
            <Row>
              {product?.map((data) => {
                console.log(data?.image);
                return (
                  <>
                    <Col md={6}>
                      <Card style={{ width: "18rem" }} className="mb-4">
                        <Card.Img variant="top" src={data?.image} />
                        <Card.Body>
                          <Card.Title>{data?.name}</Card.Title>
                          <Card.Text>{data?.description}</Card.Text>
                          <Button variant="outline-dark">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AllProducts;
