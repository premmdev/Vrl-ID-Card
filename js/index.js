

var employeeCode,name,designation,aadhaar,department,branchName,dateOfJoining,branchAddress,dateOfBirth,residentialAddress,mobileNumber,emailId,bloodGroup;

document.querySelector("button").addEventListener("click",function(){
    
    validateForm();
    printCard();
    document.querySelector(".input").style.display = "none";
    document.querySelector(".output").style.display = "initial";
    document.querySelector(".navbar").style.display = "none";
    
});

function display(input) {
    if (input.files && input.files[0]) {
       var reader = new FileReader();
       reader.onload = function(event) {
          $('#image').attr('src', event.target.result);
       }
       reader.readAsDataURL(input.files[0]);
    }
 }
 
 $("#photo").change(function() {
    display(this);
 });

function validateForm(){
    employeeCode = document.querySelector("#ecode").value;
    name = document.querySelector("#name").value;
    designation = document.querySelector("#designation").value;
    aadhaar = document.querySelector("#aadhaar").value;
    department = document.querySelector("#department").value;
    branchName = document.querySelector("#branch-name").value;
    branchAddress = document.querySelector("#branch-address").value;
    dateOfBirth = document.querySelector("#dob").value;
    dateOfJoining =  document.querySelector("#doi").value;
    residentialAddress = document.querySelector("#resadd").value;
    mobileNumber = document.querySelector("#mobile").value;
    emailId = document.querySelector("#email").value;
    bloodGroup = document.querySelector("#blood").value;

}

function printCard(){
    document.querySelector(".ecode").textContent = employeeCode;
    document.querySelector(".department").textContent = department;
    document.querySelector(".name").textContent = name;
    document.querySelector(".aadhaar").textContent = aadhaar;
    document.querySelector(".branch-name").textContent = branchName;
    document.querySelector(".branch-address").textContent = branchAddress;
    document.querySelector(".dob").textContent = dateOfBirth;
    document.querySelector(".doi").textContent = dateOfJoining;
    document.querySelector(".resadd").textContent = residentialAddress;
    document.querySelector(".mobile").textContent = mobileNumber;
    document.querySelector(".email").textContent = emailId;
    document.querySelector(".designation").textContent = designation;
    document.querySelector(".blood").textContent = bloodGroup;
}
