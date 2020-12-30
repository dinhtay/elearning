const validateinfomation = [
  "Tài khoản không được để trống",
  "Mật khẩu không được để trống",
  "Email không được để trống",
  "Số điện thoại không được để trống",
  "Họ tên không được để trống",
  "Xác nhận mật khẩu không đúng",
  "Email Không đúng định dạng",
  "Xác nhận mật khẩu không được để trống",
  "Định dạng số điện thoại không đúng",
  "Mật khẩu phải nhiều hơn 6 ký tự",
];

export default function check(values) {
  console.log("kiemTra", values);
  let error = "";

  if (!values.taiKhoan.trim()) {
    error.taiKhoan = validateinfomation[0];
  }
  if (!values.matKhau.trim()) {
    error.matKhau = validateinfomation[1];
  }

  return error;
}
