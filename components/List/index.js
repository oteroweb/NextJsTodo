import React from "react";
import Todo from "@components/Todo";
import EditTodo from "@components/EditTodo";
import { Grid } from "@mui/material";

const TODO_STATUSES = {
  ACTIVE: "active",
  EDITING: "editing",
}

const List = ({ list, deleteTodo, updateTodo, saveTodo }) => {
    const renderTodo = (key) => {
        if (list[key] == null) return null;
        if (list[key]["status"] === TODO_STATUSES.ACTIVE) {
            return (
                <Todo
                    key={key}
                    index={key}
                    todo={list[key].todo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            );
        } else if (list[key]["status"] === TODO_STATUSES.EDITING) {
            return (
                <EditTodo
                    key={key}
                    index={key}
                    todo={list[key].todo}
                    saveTodo={saveTodo}
                />
            );
        }
    };

    return (
        <Grid container>
            {Object.keys(list).map((key) => renderTodo(key))}
        </Grid>
    );
};

export default List;
