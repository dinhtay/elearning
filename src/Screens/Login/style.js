import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  colorRed: {
    color: "red",
  },
  main: {
    paddingTop: "88.5px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    padding: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;
