import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Write Tests")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText("Add Todo"));
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Delete", { selector: "button" }));
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
