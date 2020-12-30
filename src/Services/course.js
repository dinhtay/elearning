import Axios from "axios";
class CourseService {
  // lấy danh sách khóa học
  fetchCourses() {
    return Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08",
    });
  }

  // lấy danh sách khóa học theo danh mục khóa học
  fetchCourserCategory(maDanhMuc) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP08`,
    });
  }
  // lấy danh mục khóa học
  fetchCategory() {
    return Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    });
  }

  // lấy thông tin khóa học
  fetchDetail(maKhoaHoc) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
    });
  }

  fetchCoursesPages(pages) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${pages}&pageSize=10&MaNhom=GP08`,
    });
  }
}
export default CourseService;
