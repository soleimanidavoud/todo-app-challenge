import { makeStyles } from "@material-ui/core";
import TodoEditor from "../layouts/TodoEditor";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh - 48px)",
    },
  };
});

export default function Edit() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TodoEditor />
    </div>
  );
}
