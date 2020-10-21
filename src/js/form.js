(function form() {
  var username
  var password
  document.getElementById('login').addEventListener('click', event => {
    username = document.getElementById('name').value
    password = document.getElementById('password').value
    // console.log(username)

    if (username.length === 0) {
      document.getElementById('writename').innerText = '请输入你的用户名'
    } else if (password.length === 0) {
      document.getElementById('writenpassword').innerText = '请输入你的密码'
    } else {
      document.getElementById('writename').hidden = true
      document.getElementById('writenpassword').hidden = true
      window.location.href ="login.html"
    }
    console.log('用户名: ', username)
    console.log('密码: ', password)

  
  })

  document.getElementById('sign').addEventListener('click', event => {


      window.location.href ="sign.html"
    

  
  })

})()
