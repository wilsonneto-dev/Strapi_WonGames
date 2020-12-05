import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';

import styled from 'styled-components';

import { Button } from '@buffetjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

const HomePage = () => {

  const headers = [
    { name: "Name", value: "name" },
    { name: "Description", value: "description" },
    { name: "Url", value: "html_url" }
  ];

  const rows = [
    { name: "Rep de teste 01", description: 'Desc 01', html_url: 'just testing' },
    { name: "Test 02", description: 'Desc 02', html_url: 'just testing 2' }
  ];

  return (
    <Wrapper>
      <Header 
        title={{label: "Repositórios" }}
        content="UM exemplo de plugin simples"
      />

      <Button color="none" icon={<FontAwesomeIcon icon={faPlus} />} label="Save" />

      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
