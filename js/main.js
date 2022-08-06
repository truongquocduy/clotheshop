// Hàm thay đổi hình ảnh trong trang chi tiết
function changeImg(element){  
    // dom đến thành phần mang id là hinhdaidien 
    let imgprimary = document.getElementById("hinhdaidien");
    // thay đổi src hinhdaidien bằng src hình truyền vào
    imgprimary.src = element.src;  
}
//  hàm kiểm lỗi đầu vào input
function checkValidate(element){
    // nếu đối tượng truyền vào có name là "fullname" thì thực hiện if bên dưới
    if(element.name =="fullname"){
        // TH rỗng hiển thị thông báo lỗi , đúng thì ẩn
        if(element.value==""){
            document.getElementById("errorfullname").style.display="block" 
        }
        else{
            document.getElementById("errorfullname").style.display="none"
        }
    }
    if(element.name == "email"){
        if(element.value==""){
            document.getElementById("erroraccount").style.display="block"
        }
        else{
            document.getElementById("erroraccount").style.display="none"
        }
    }
    if(element.name == "pswd"){
        if(element.value==""){
            document.getElementById("errorpassword").style.display="block"
        }
        else{
            document.getElementById("errorpassword").style.display="none"
        }
    }
}
// hàm khi bấm đăng ký 
function register(){
    // dom tới thành phần mang id là frm 
    let frm = document.getElementById("frm")
    // nếu fullname là rỗng thì xuất hiện lỗi 
    if(frm.fullname.value ==""){
        document.getElementById("errorfullname").style.display="block"
    }
    if(frm.email.value ==""){
        document.getElementById("erroraccount").style.display="block"
    }
    if(frm.pswd.value ==""){
        document.getElementById("errorpassword").style.display="block"
    }
}
function addcart(img,title,price){
    //Truy xuất đến thành phần mang id là table
    var table = document.getElementById("table");
    // tạo hàng mới
    var row = table.insertRow();
    // tạo cột đầu tiên
    var cell1 = row.insertCell();
    cell1.innerHTML = '<img src="'+ img +'" style="width: 80px;" alt="">'
    var cell2 = row.insertCell();
    cell2.innerText=title
    var cell3 = row.insertCell();
    cell3.innerText=price
    var cell4 = row.insertCell();
    cell4.innerHTML = ' <button class="btn btn-outline-dark"><strong>-</strong></button><button class="btn" disabled><strong>1</strong></button><button class="btn btn-outline-dark"><strong>+</strong></button>'
    var cell5 = row.insertCell();
    cell5.innerText=price
    
}

