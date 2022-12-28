const loginForm = document.getElementById("form-login");
const HoVaTenRight = "Nguyễn Xuân Hiển";
const TuoiRight = "14";
const SoDienThoaiRight = "0896436932";
loginForm.addEventListener("submit", function() {
    const HoVaTen = document.getElementById("HoVaTen").value;
    const Tuoi = document.getElementById("Tuoi").value;
    const SoDienThoai = document.getElementById("SoDienThoai").value;
    checkUser(HoVaTen,Tuoi,SoDienThoai);
});
function checkUser (HoVaTen, Tuoi, SoDienThoai) {
    if (HoVaTen != HoVaTenRight || Tuoi != TuoiRight || SoDienThoai != SoDienThoaiRight) {
        alert("Login fail !!");
    } else {
        alert("Login success !!");
    }
}