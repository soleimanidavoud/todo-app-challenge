import {
  Chip,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";
import Edit from "../icons/Edit";
import Delete from "../icons/Delete";

const useStyles = makeStyles((theme) => {
  return {
    item: { padding: 5 },
    paper: { padding: 10 },
    titleTypo: {
      fontSize: 16,
      fontWeight: 800,
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    desTypo: {
      fontSize: 12,
      fontWeight: 400,
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical", // deprecated :|
      overflow: "hidden",
      marginTop: 10,
      whiteSpace: "pre-line",
    },
    expand: { flexGrow: 1 },
    actionContainer: { marginTop: 10 },
    icon: { color: "#000", fontSize: "1em", margin: 2 },
  };
});

export default function TodoCard(props) {
  const classes = useStyles();
  const { todo } = props;
  const { deleteTodo } = useContext(TodoContext);

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <Grid item xs={6} md={4} className={classes.item}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.titleTypo}>{todo?.title}</Typography>
        <Typography className={classes.desTypo}>{todo?.description}</Typography>
        <Grid container className={classes.actionContainer} alignItems="center">
          <Chip
            label={todo?.status}
            variant="default"
            color="primary"
            size="small"
          />
          <div className={classes.expand} />
          <IconButton size="small" onClick={handleDeleteTodo}>
            <SvgIcon className={classes.icon}>
              <Delete />
            </SvgIcon>
          </IconButton>
          <IconButton size="small" component={Link} to={`/edit/${todo?.id}`}>
            <SvgIcon className={classes.icon}>
              <Edit />
            </SvgIcon>
          </IconButton>
        </Grid>
      </Paper>
    </Grid>
  );
}
