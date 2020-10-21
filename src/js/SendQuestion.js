(function SendQuestion() {

  document.getElementById('SendQ').addEventListener('click', event => {
    window.alert("提交成功");
  })
  document.getElementById('Back').addEventListener('click',event =>{
    window.location.href = "index.html";
  })
})()  