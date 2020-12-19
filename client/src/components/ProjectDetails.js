import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Description = styled.div`
  min-height: 200px;
  margin: 5px 15px;
  text-align: justify;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  margin: 5px;
`;

const ProjectDetails = ({ title, description, user }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <p>
        Check out more projects by <Link to={`/users/${user}`}>{user}</Link>
      </p>
    </>
  );
};

export default ProjectDetails;

ProjectDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.string,
};
