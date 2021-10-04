import TableComponent from 'components/TableComponent';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContributions } from 'store/reducers/contributions/contributions.action';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  gap: 3em 0;
  padding: 0.25em 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 25px;

  button {
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 20px;
    width: 170px;
    text-transform: uppercase;
    font-size: 15px;

    :disabled {
      cursor: default;
      border: 1px solid hsl(0, 0%, 80%) !important;
      background: hsl(0, 0%, 80%) !important;
    }
    :disabled:hover {
      color: hsl(0, 0%, 100%) !important;
    }
  }
  button:nth-of-type(1) {
    border: 1px solid hsl(167, 71%, 47%);
    background-color: hsl(167, 71%, 47%);
    color: #fdf5f0;
    margin-left: 30px;
    transition: background 0.3s, color 0.3s;
    :hover {
      background-color: #fff;
      color: hsl(167, 71%, 47%);
    }
  }
  button:nth-of-type(2) {
    border: 1px solid hsl(214deg 100% 45%);
    background-color: hsl(214deg 100% 45%);
    color: #fdf5f0;
    margin-left: 30px;
    transition: background 0.3s, color 0.3s;
    :hover {
      background-color: #fff;
      color: hsl(214deg 100% 45%);
    }
  }
  button:nth-of-type(3) {
    border: 1px solid hsl(2, 65%, 55%);
    background-color: hsl(2, 65%, 55%);
    color: #fdf5f0;
    margin-left: 30px;
    transition: background 0.3s, color 0.3s;
    :hover {
      background-color: #fff;
      color: hsl(2, 65%, 55%);
    }
  }
`;

export default function Verify() {
  // fetch data
  const contributions = useSelector((state) => state.contributions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContributions());
  }, []);

  const [selected, setSelected] = useState({});

  return (
    <Container>
      <TableComponent
        header={[
          'Sent Date',
          'Legal Name',
          'Legal Form',
          'Country',
          'City',
          'Document',
        ]}
        isLoading={contributions.isLoading}
        data={contributions.data}
        selected={selected}
        setSelected={setSelected}
      />
      <ButtonsContainer>
        <button
          disabled={Object.keys(selected).length === 0}
          onClick={() => {}}
          type="button"
        >
          Accept
        </button>
        <button
          disabled={Object.keys(selected).length === 0}
          onClick={() => {}}
          type="button"
        >
          Resend
        </button>
        <button
          disabled={Object.keys(selected).length === 0}
          onClick={() => {}}
          type="button"
        >
          Reject
        </button>
      </ButtonsContainer>
    </Container>
  );
}
