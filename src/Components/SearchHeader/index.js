import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCourse, fetchDetail } from "../../Redux/Course";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function SearchHeader() {
  const dispatch = useDispatch();
  const history = useHistory();
  const courseList = useSelector((state) => state.Course.course);
  const [key, setKey] = useState("");
  const handleChange = (event) => {
    let key = event.target.value;
    setKey(key);
  };

  useEffect(() => {
    dispatch(fetchCourse());
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const ten = courseList.filter(
      (ten) => ten.maKhoaHoc.toLowerCase() === key.toLowerCase()
    );
    console.log(ten);
    if (key !== "") {
      if (ten.length > 0) {
        return history.push(`/details/${key}`);
      } else if (ten.length === 0) {
        return alert("không tìm thấy");
      }
    } else {
      alert("mời nhập");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Button type="submit" style={{ outline: "none" }}>
          <i className="fa fa-search" />
        </Button>
        <input
          onChange={handleChange}
          type="text"
          name="search"
          value={key}
          placeholder="Tìm môn học"
        />
      </form>
    </>
  );
}
