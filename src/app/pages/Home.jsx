import { makeStyles } from "@material-ui/core";
import TodoInit from "../layouts/TodoInit";
import TodoList from "../layouts/TodoList";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh - 48px)",
    },
  };
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TodoInit />
      <TodoList />
    </div>
  );
}
