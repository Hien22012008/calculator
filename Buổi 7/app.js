// bài 1
// function KiemTraSo(x) {
//     var x = 5.9;
//     var phanNguyen = Math.floor(x);
//     var y = x - phanNguyen;

//     if (x < 0) {
//         console.log("x là số âm");
//     } else if (x == 0) {
//         console.log("x = 0");
//     } else {
//         // x > 0
//         if (y == 0) {
//             console.log("x là nguyên dương");
//         } else {
//             console.log("x là số thập phân dương");
//         }
//     }
// }
// KiemTraSo (-1)

//bài 2
// var x = 1;
// var y = 3;
// var z = 4; 
// var max = x;
// if (max < y) {
//     max = y 
// }

// if (max < z) {
//     max = z
// } 

// console.log("Giá trị lớn nhất là", max);

// bài 3
var dtb = 10;

function TinhDiemTrungBinh(dtb) {
    if (dtb < 5) {
        console.log("Hạng F");
    } else if (dtb < 7) {
        console.log("Hạng C");
    } else if (dtb < 9) {
        console.log("Hạng B");
    } else {
        console.log("Hạng A");
    }
}

function Hello(name) {
    console.log("Hello " + name + " !");
}

function Add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
//TinhDiemTrungBinh(2);

function abs(a) {
    if (a < 0) {
        return -a;
    } else {
        return a;
    }
}

// document.body.style.backgroundColor ="blue";
// document.getElementById("h1").style.color = "wihte";
// // bodyBGC ="black";

const btnYes = document.getElementById("btnYes");

const btnNo = document.getElementById("btnNo");

btnYes.addEventListener("mouseenter", function() {
    btnYes.innerHTML = "No";
    btnNo.innerHTML = "Yes";
});

btnNo.addEventListener("mouseenter", function() {
    btnYes.innerHTML = "Yes";
    btnNo.innerHTML = "No";
});