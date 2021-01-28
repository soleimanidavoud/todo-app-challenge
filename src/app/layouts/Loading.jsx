import { CircularProgress, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return { container: { height: "90vh" } };
});

export default function Loading() {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <CircularProgress />
    </Grid>
  );
}
