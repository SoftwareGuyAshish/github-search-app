import Axios from "axios";
import React, { useContext, useState } from "react";

import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from "reactstrap";

import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Repos from "../Components/Repos";
import UserCard from "../Components/UserCard";
import UserContext from "../context/UserContext";

const Home = () => {
  const context = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");

  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      setQuery("");
    } catch (error) {
      toast("User not found", { type: "error" });
    }
  };

  if (!context.user?.uid) {
    return <Navigate to="/signup" />;
  }

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />

            <Button onClick={fetchDetails} color="primary">
              Fetch User
            </Button>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;
