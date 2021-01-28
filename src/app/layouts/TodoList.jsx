import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoCard from "./TodoCard";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      borderRadius: "20px 20px 0 0",
      backgroundColor: theme.palette.primary.main,
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: 250,
    },
    child: {
      backgroundColor: "#a2ceed",
      borderRadius: "20px 20px 0 0",
      padding: 20,
      flexGrow: 1,
      overflowY: "auto",
    },
    title: { fontSize: "1em", color: "#fff", margin: "20px 30px 10px 30px" },
  };
});

export default function TodoList() {
  const classes = useStyles();

  const { todos } = useContext(TodoContext);

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Tasks</Typography>
      <Grid container className={classes.child}>
        {todos?.length > 0 ? (
          todos.map((todo) => <TodoCard todo={todo} key={todo} />)
        ) : (
          <Grid container alignItems="center" justify="center">
            <Typography align="center">
              You have nothing to do. <br /> Go get some sleep.
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
