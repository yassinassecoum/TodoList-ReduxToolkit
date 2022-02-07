import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTodo, updateTodoStatus } from "../features/Todos";
export const Todo = ({ text, completed, id }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper
      style={
        completed
          ? { backgroundColor: "lightgreen" }
          : { backgroundColor: "gray" }
      }
    >
      <input onClick={() => dispatch(updateTodoStatus(id))} type="checkbox" />
      <span>{text}</span>
      {/* <span id="status">{completed ? "completed" : "not completed"}</span> */}
      <button onClick={() => dispatch(removeTodo(id))}>Delete Todo</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;
  min-height: 48px;
  margin-bottom: 10px;
  align-items: center;
  min-width: 450px;
  justify-content: space-between;
  padding: 10px;
  input {
    height: 30px;
    width: 30px;
  }
  span {
    font-size: 22px;
    font-weight: 500;
  }
  #status {
    font-size: 18px;
    font-weight: 600;
  }
  button {
    background-color: orangered;
    border-radius: 5px;
    border: none;
    height: 36px;
    color: white;
    font-weight: 600;
    font-size: 18px;
  }
`;
