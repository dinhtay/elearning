import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import angular from "../../assets/angular.jpg";
import reactjs from "../../assets/reactjs.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "40px",
    marginTop: "40px",
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      marginTop: "20px",
    },
  },
  info: {
    background: "#fbfbf8",
    display: "flex",
    justifyContent: " space-around",

    boxShadow: "0px -10px 150px 0px black",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expand1: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  expandOpen1: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    background: "#0f7c90",
    color: "white",
  },
}));

export default function Review() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClickLeft = () => {
    setExpanded1(!expanded1);
  };

  return (
    <>
      <span
        style={{
          border: "1px solid none",
          borderRadius: " 19px",
          padding: "3px",
          color: "white",
          fontSize: "21px",
          background: "#0f7c90",
          boxShadow: "0px 1px 5px",
          marginLeft: " 40px",
          display: "inline-block",
          marginTop: "40px",
        }}
      >
        Giới Thiệu
      </span>
      <div className={classes.info}>
        <Card className={classes.root}>
          <CardHeader
            className={classes.title}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Khóa Học ReactJS"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={reactjs}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Giới thiệu về ReactJS - Phần I (Các khái niệm cơ bản)
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand1, {
                [classes.expandOpen1]: expanded1,
              })}
              onClick={handleExpandClickLeft}
              aria-expanded={expanded1}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded1} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Giới thiệu:</Typography>
              <Typography paragraph>
                React.js là một thư viện Javascript đang nổi lên trong những năm
                gần đây với xu hướng Single Page Application. Trong khi những
                framework khác cố gắng hướng đến một mô hình MVC hoàn thiện thì
                React nổi bật với sự đơn giản và dễ dàng phối hợp với những thư
                viện Javascript khác. Nếu như AngularJS là một Framework cho
                phép nhúng code javasscript trong code html thông qua các
                attribute như ng-model, ng-repeat...thì với react là một library
                cho phép nhúng code html trong code javascript nhờ vào JSX, bạn
                có thể dễ dàng lồng các đoạn HTML vào trong JS.Tích hợp giữa
                javascript và HTML vào trong JSX làm cho các component dễ hiểu
                hơn
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.root}>
          <CardHeader
            className={classes.title}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                A
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Khóa Học Angular"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={angular}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Giới thiệu về Angular - Phần I (Các khái niệm cơ bản)
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Giới thiệu:</Typography>
              <Typography paragraph>
                Angular 2 được biết đến tên rộng rãi như hiện tại là Angular
                thôi nhé. Nó là một framework cho frontend và là bản tiếp theo
                của AngularJS. Angular là mã nguồn mở giúp chúng ta xây dựng một
                Single Page Applications (SPAs). Angular là cung được xây dựng
                cả ứng dụng Mobile và Desktop. Nó được xây dựng sử dụng
                JavaScript. Bạn phải sử dụng nó để xây dựng ứng dụng hoàn chỉnh
                kết hợp với HTML, CSS và JavaScript. Angular có nhiều cải tiến
                thông so với AngularJS. Nó có nhiều cải tiến làm dễ học và phát
                triển ứng dụng cho doanh nghiệp. Bạn có thể xây dựng một ứng
                dụng dễ dàng mở rộng, bảo trì, test.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}
