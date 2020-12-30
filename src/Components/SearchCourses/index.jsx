import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import {
  fetchCategory,
  fetchCategoryCourser,
  fetchDetail,
} from "../../Redux/Course";
import { THEM_GIO_HANG } from "../../Redux/Constants";

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,

    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function SearchCourses() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Loading.isLoading);
  const categoryList = useSelector((state) => state.Course.categoryCourse);
  const courseDetail = useSelector((state) => state.Course.detailCourse);

  const listCategoryCourser = useSelector(
    (state) => state.Course.listCategoryCourser
  );
  const [search, setSearch] = useState({
    maDanhMuc: "",
    maKhoaHoc: "",
  });

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  useEffect(() => {
    dispatch(fetchCategoryCourser(search.maDanhMuc));
  }, [search.maDanhMuc]);

  function handleSearch(event) {
    const { value, name } = event.target;

    setSearch({
      ...search,
      [name]: value,
    });
  }
  function rendeDetail() {
    if (loading) {
      return (
        <div>
          <div className="loader">Loading...</div>
        </div>
      );
    } else {
      return (
        <Grid item style={{ margin: "30px auto" }} xs={6} sm={4}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={courseDetail.hinhAnh}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    style={{ color: "blue", fontSize: "12px" }}
                    component="h2"
                  >
                    {courseDetail.tenKhoaHoc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() =>
                    dispatch({
                      type: THEM_GIO_HANG,
                      payload: courseDetail,
                    })
                  }
                  style={{ border: "1px solid " }}
                  size="small"
                  color="primary"
                >
                  Thêm Giỏ Hàng
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      );
    }
  }

  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Autocomplete
          id="combo-box-demo"
          name="maDanhMuc"
          options={categoryList}
          onChange={(event, newValue) => {
            event.preventDefault();
            setSearch({
              maDanhMuc: newValue?.maDanhMuc,
            });
          }}
          label="maDanhMuc"
          getOptionLabel={(option) => option.maDanhMuc}
          //value={getOptionLabel}
          renderInput={(params) => (
            <TextField
              name="maDanhMuc"
              onChange={handleSearch}
              {...params}
              value={params.maDanhMuc}
              label="Danh Mục"
              variant="outlined"
            />
          )}
        />
        <Autocomplete
          id="combo-box-demo"
          options={listCategoryCourser}
          getOptionLabel={(option) => option.tenKhoaHoc}
          onChange={(event, newValue) => {
            event.preventDefault();
            setSearch({
              maKhoaHoc: newValue?.maKhoaHoc,
            });
          }}
          renderInput={(params) => (
            <TextField
              name="maKhoaHoc"
              value={params.tenKhoaHoc}
              {...params}
              label="Môn Học"
              variant="outlined"
            />
          )}
        />

        {search.maKhoaHoc !== "" ? (
          <Button
            style={{ width: "13%" }}
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => dispatch(fetchDetail(search.maKhoaHoc))}
          >
            Tìm Kiếm
          </Button>
        ) : (
          <Button
            style={{ width: "13%" }}
            variant="contained"
            color="primary"
            disableElevation
          >
            Tìm Kiếm
          </Button>
        )}
      </div>
      <div style={{ background: "#fbfbf8", marginTop: "10px", padding: "6px" }}>
        {courseDetail !== null ? rendeDetail() : ""}
      </div>
    </>
  );
}
