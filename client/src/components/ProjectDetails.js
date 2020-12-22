import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Description = styled.div`
  margin: 5px 15px;
  text-align: justify;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  margin: 5px;
`;

const Container = styled.div`
  border-radius: 15px;
  border: 1px solid var(--main-color);
  width: 100%;
  padding: 10px;
  text-align: center;
  margin: 10px 0;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  a {
    color: var(--button-color);
    text-decoration: none;
    border-radius: 15px;
    padding: 5px;
    margin-left: 2px;
    background-color: var(--main-color);
  }
`;

const ProjectDetails = ({ title, description, user, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Container>
        <p>To recreate this project, you&apos;ll need:</p>
        <div>{children}</div>
      </Container>
      <Container>
        <p>
          Check out more projects by
          <Link to={`/users/${user}`}>{user}</Link>
        </p>
      </Container>
    </>
  );
};

export default ProjectDetails;

ProjectDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.string,
  children: PropTypes.array,
};
