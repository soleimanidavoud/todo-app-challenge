import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Add from "../icons/Add";

const useStyles = makeStyles((theme) => ({
  container: { padding: 30 },
  title: { fontWeight: 500, fontSize: "1.1em" },
  addButton: { marginTop: 10 },
}));

export default function TodoInit() {
  const classes = useStyles();

  const { addTodo } = useContext(TodoContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    addTodo({
      title: event?.target?.title?.value,
      description: event?.target?.description?.value,
      status: "ToDo",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Grid container direction="column" className={classes.container}>
        <Typography className={classes.title}>Add a new Task</Typography>
        <TextField name="title" variant="filled" label="Title" margin="dense" />
        <TextField
          name="description"
          variant="filled"
          label="Description"
          margin="dense"
          multiline
          rows={5}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          className={classes.addButton}
          startIcon={<Add />}
          type="submit"
        >
          Add
        </Button>
      </Grid>
    </form>
  );
}
