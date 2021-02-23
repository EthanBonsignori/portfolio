import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Project = (props) => {
  const { project } = useParams();

  return (
    <>
      {project}
      <Outlet />
    </>
  );
};

export default Project;
