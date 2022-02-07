import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Todo } from "./Todo";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.value);
  console.log(todos);
  return (
    <Wrapper>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <Todo text={todo.title} completed={todo.completed} id={todo.id} />
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`;
