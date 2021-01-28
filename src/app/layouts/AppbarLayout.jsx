import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import useAppbarTitle from "../hooks/useAppbarTitle";

const useStyles = makeStyles((theme) => {
  return { root: { flexGrow: 1 } };
});

export default function AppbarLayout(props) {
  const classes = useStyles();
  const { pathname } = useLocation();

  const { title } = useAppbarTitle(pathname);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography>Task Management &gt; {title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
