function KiemTraNamNhuan(year) {
  let x = year % 400;
  let y = year % 4;
  let z = year % 100;
  if (x == 0 || (y == 0 && z != 0)) {
    console.log("Năm nhuận");
  } else {
    console.log("Không phải năm nhuận");
  }
}
var year = 2022;
// KiemTraNamNhuan(year);

function PhanLoaiTamGiac(a, b, c) {
  let tong3goc = a + b + c;
  if (tong3goc == 180) {
    if (a > 90 || b > 90 || c > 90) {
      console.log("Tam giác tù");
    } else if (a == 90 || b == 90 || c == 90) {
      console.log("Tam giác vuông");
    } else if (a < 90 && b < 90 && c < 90) {
      console.log("Tam giác nhọn");
      if (a == b && a == c) {
        console.log("Tam giác đều");
      }
    }
  } else {
    console.log("Các góc không hợp lệ");
  }
}

// PhanLoaiTamGiac(100, 40, 40);

function HinhChuNhat(chieudai, chieurong) {
  let chuvi = (chieudai + chieurong) * 2;
  let dientich = (chieudai * chieurong);
  console.log("Chu vi = ", chuvi);
  console.log("Diện tích = ", dientich);
}

// HinhChuNhat(6,4);

function HinhTron(bankinh) {
  const PI = 3.14;
  let duongkinh = bankinh * 2;
  let chuvi = 2 * PI * bankinh;
  let dientich = bankinh * bankinh * PI;
  console.log("Đường kính = ", duongkinh);
  console.log("Chu vi = ", chuvi);
  console.log("Diện tích = ", dientich);
}

// HinhTron(3);