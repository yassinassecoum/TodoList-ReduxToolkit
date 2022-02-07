import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../features/Todos";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const dispatchTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: Date.now(), title: todo, completed: false }));
    setTodo("");
  };
  return (
    <Wrap>
      <form>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter your task.."
        />
        <button type="submit" onClick={(e) => dispatchTodo(e)}>
          Add Todo
        </button>
      </form>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  input {
    font-size: 22px;
    width: 320px;
    border: none;
    height: 36px;
    font-weight: 600;
    border-radius: 5px;
  }
  button {
    border-radius: 5px;
    font-size: 22px;
    border: none;
    height: 36px;
    color: white;
    font-weight: 600;
    margin-left: 10px;
    background-color: lightblue;
    cursor: pointer;
  }
`;
