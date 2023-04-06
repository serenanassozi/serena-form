function validation(){
    const fname = document.getElementById("fname")
    const lname = document.getElementById("lname")
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    if(fname.value==''){
        document.querySelector(".fnameError"). style.display="block"
        document.querySelector(".fs").style.display="block";
    }
    if(lname.value==''){
        document.querySelector(".lnameError"). style.display="block"
        document.querySelector(".fs").style.display="block";
    }
    if(email.value==''){
        document.querySelector(".emailError"). style.display="block"
        document.querySelector(".fs").style.display="block";
    }
    if(password.value==''){
        document.querySelector(".passwordError"). style.display="block"
        document.querySelector(".fs").style.display="block";
    }
}

