import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);
  const fetchRepos = async () => {
    const { data } = await axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup className="mb-5 pb-5">
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          {
            <>
              <div className="text-primary">{repo.name}</div>
              <div className="text-secondary">{repo.language}</div>
              <div className="text-primary">{repo.description}</div>
            </>
          }
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
