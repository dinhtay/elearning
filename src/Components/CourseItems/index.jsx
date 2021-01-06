import "../../App.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import { THEM_GIO_HANG } from "../../Redux/Constants";

export default function CourseItems(props) {
  const { item } = props;
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Tooltip
        title={
          <div className="card" style={{ background: "black", width: "100%" }}>
            <div className="card-header">
              <h5 style={{ marginBottom: "0" }} className="card-title">
                {item.tenKhoaHoc}
              </h5>
            </div>
            <div className="card-body">
              <p>Mô tả:</p>
              <p className="card-subtitle">{item.moTa}</p>
            </div>
            <div className="card-footer">
              <Link
                className="btn btn-outline-warning"
                style={{ width: "100%", marginTop: "5px" }}
                onClick={() => {
                  dispatch({
                    type: THEM_GIO_HANG,
                    payload: item,
                  });
                }}
              >
                Thêm Giỏ Hàng
                <i className="text-danger fa fa-heart" />
              </Link>
            </div>
          </div>
        }
        interactive
      >
        <div className="card">
          <div className="card-header">
            <img src={item.hinhAnh} alt="hinh" width="150px" height="200px" />
          </div>
          <div className="card-body" style={{ height: "90px" }}>
            <h4 className="card-title">{item.tenKhoaHoc}</h4>
            <p className="card-subtitle">{item.maKhoaHoc}</p>
            <Link
              // click vào thì gởi mã khóa học qua cho trang detail
              to={`/details/${item.maKhoaHoc}`}
              className="btn py-1"
            >
              Detail
            </Link>
          </div>
        </div>
      </Tooltip>
    </div>
  );
}
