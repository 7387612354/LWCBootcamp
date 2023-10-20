function beforeSubmit(){
    let outputDate = document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate");
    console.log("inputDate.value",inputDate.value);// string to date (en_In)
    let formattedDate = new Date(inputDate.value).toLocaleString("en-IN");
    outputDate.value = formattedDate;

}