import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useEffect, useRef } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";
import useTodoStatuses from "../hooks/useTodoStatuses";
import Edit from "../icons/Edit";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 48px)",
  },
  title: { fontWeight: 500, fontSize: "1.1em" },
  cancelButton: { marginLeft: 10 },
  buttonsContainer: { marginTop: 10 },
  descriptionTextField: { flexGrow: 1 },
  descriptionTextFieldInput: { height: "100%" },
}));

export default function TodoEditor(props) {
  const classes = useStyles();

  const { params } = useRouteMatch();
  const history = useHistory();

  const { editTodo, getTodo } = useContext(TodoContext);

  const { allowedStatuses } = useTodoStatuses(params.id);

  const titleRef = useRef(null);
  const desRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    const todo = getTodo(params.id);
    if (titleRef.current) titleRef.current.value = todo?.title;
    if (desRef.current) desRef.current.value = todo?.description;
    if (statusRef.current) statusRef.current.value = todo?.status;
  }, []);

  const handleEditTodo = () => {
    editTodo(params.id, {
      title: titleRef?.current?.value,
      description: desRef?.current?.value,
      status: statusRef?.current?.value,
    });
    history.push("/");
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Edit Task</Typography>
      <TextField
        defaultValue=""
        variant="filled"
        label="Title"
        margin="dense"
        inputRef={titleRef}
      />
      <TextField
        defaultValue=""
        variant="filled"
        label="Description"
        margin="dense"
        multiline
        className={classes.descriptionTextField}
        rows={16}
        InputProps={{ className: classes.descriptionTextFieldInput }}
        inputRef={desRef}
      />

      <TextField
        defaultValue=""
        select
        label="Status"
        variant="filled"
        margin="dense"
        inputRef={statusRef}
      >
        {allowedStatuses &&
          allowedStatuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
      </TextField>

      <Grid container wrap="nowrap" className={classes.buttonsContainer}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          startIcon={<Edit />}
          onClick={handleEditTodo}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          size="large"
          fullWidth
          className={classes.cancelButton}
          component={Link}
          to="/"
        >
          Cancel
        </Button>
      </Grid>
    </div>
  );
}
