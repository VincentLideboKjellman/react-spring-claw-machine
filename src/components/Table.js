import React from 'react';
import styled from 'styled-components';
import table from '../assets/images/Table_Top.png';

const StyledTable = styled.div`

position: absolute;
z-index: 2;
`
const Table = ({...props}) => {
  return (
    <StyledTable {...props}>
      <img src={table} alt="Table"></img>
    </StyledTable>
  );
}

export default Table;
