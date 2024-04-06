//wishlist
function wishlist(){
    const wish = document.getElementById('btn-heart');
    wish.style.color='red'
    alert('There is no Item available')
}
//cart
function cart(){
    const c = document.getElementById('btn-cart')
    c.style.color='aqua'
    alert('There is no Item added to the cart')
}
//login
let login = document.querySelector('.signin');
document.querySelector('#login-btn').onclick=()=>{
    login.classList.toggle('active')
}
document.querySelector('#close-login').onclick=()=>{
    login.classList.remove('active')
}
//form validation
function validateForm(){
    var user=document.getElementById('emailid').value;
    var pass=document.getElementById('password').value;
    //reset error msgs
    document.getElementById('usererror').innerHTML="";
    document.getElementById('passworderror').innerHTML="";
    //regex patterns
    var userpattern=/^[a-zA-Z0-9_]{8,20}$/;
    var passwordpattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-z]).{8,}$/;
    //validate username 
    if(!userpattern.test(user)){
        document.getElementById('usererror').innerHTML='Invalid Username';
        return false;
    }
    //validate password
    if(!passwordpattern.test(pass)){
        document.getElementById('passworderror').innerHTML='Invalid Password';
        return false;
    }
    return true;
}
//like
function like(){
    const l = document.getElementById('btn-like')
    l.style.color='#444'
    alert(`You liked this book`)
}

//wishlist-heart
function heart(){
    const h = document.getElementById('btn-hearts')
    h.style.color='red'
    var wish;
    if (confirm("Do you want to added it in Wishlist?") == true) {
        wish = "Book added successfully!";
        window.alert(wish)
      
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
}
//dislike
function dislike(){
    const d = document.getElementById('btn-dislike')
    d.style.color='#444'
    var wish;
    if (confirm("Are you sure Do you want to dislike the book?") == true) {
        wish = "Any Suggestions...Please Subscribe";
        window.alert(wish)
      
    } else {
        wish = "Cancelled!";
        window.alert(wish)
    }
    
}
//addtocart
function addtocart(){
    document.getElementById('btn-addtocart')
    alert(`You want to add the item in cart`)
}
//subcribe
function subscribe(){
    document.getElementById('btn-subscribe')
    alert(`You Subscribed!`)
}
