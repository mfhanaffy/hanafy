
// first Timer

let days = document.getElementById("days") ;
let hours = document.getElementById("hours") ;
let minutes = document.getElementById("minutes") ;
let Seconds = document.getElementById("Seconds") ;

let counter = setInterval(function(){
let dateevent = new Date("march 13, 2023 23:59:59").getTime();
let date = new Date().getTime() ;

let darediff = dateevent - date ;

let day = Math.floor(darediff / (1000 * 60 * 60 * 24)) ;
let hour = Math.floor(darediff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) ;
let minute = Math.floor(darediff % (1000 * 60 * 60 ) / (1000 * 60 )) ;
let Second = Math.floor(darediff % (1000 * 60 ) / (1000 )) ;

days.innerHTML = day ;
hours.innerHTML = hour ;
minutes.innerHTML = minute ;
Seconds.innerHTML = Second ;

if( darediff <=  0 ){
    clearInterval(counter);
    days.innerHTML = 0 ;
    hours.innerHTML = 0 ;
    minutes.innerHTML = 0 ;
    Seconds.innerHTML = 0 ;
}

}, 1000)


// End Timer
//start menue
let button_menue = document.getElementById("active") ;
let menue_content = document.getElementById("menu") ;

// button_menue.onclick = function(){
//     if(menue_content.classList.contains("opacety_menue")){
//         menue_content.classList.remove("opacety_menue")
//     }else{
//         menue_content.classList.add("opacety_menue")

//     }
// }
document.onclick = function(e){
    if(e.target.id === "active"){
        if(menue_content.classList.contains("opacety_menue")){
            menue_content.classList.remove("opacety_menue")
        }else{
            menue_content.classList.add("opacety_menue")
    
        }
    }
    if(e.target.id !== "active" && e.target.id !== "menu")
    {
        if(menue_content.classList.contains("opacety_menue")){
            menue_content.classList.remove("opacety_menue")
        }
    }
}
// up
let up_toTop = document.getElementById("up_toTop")

up_toTop.onclick = function(){
    window.scrollTo({left:0 , top:0 ,behavior:"smooth"}) 
}

// to Articles
// box face one
let con_cox  = document.querySelectorAll(".Articles .contaner .menue-ARTICLEs .con_box")
let con_cox1 = document.getElementById("con_box1") 
let con_cox2 = document.getElementById("con_box2")
let con_cox3 = document.getElementById("con_box3")
let con_cox4 = document.getElementById("con_box4")
let con_cox5 = document.getElementById("con_box5")
let con_cox6 = document.getElementById("con_box6")
let con_cox7 = document.getElementById("con_box7")
let con_cox8 = document.getElementById("con_box8")
// box button one
let button1_face1 = document.getElementById("read_more1")
let button2_face1 = document.getElementById("read_more2")
let button3_face1 = document.getElementById("read_more3")
let button4_face1 = document.getElementById("read_more4")
let button5_face1 = document.getElementById("read_more5")
let button6_face1 = document.getElementById("read_more6")
let button7_face1 = document.getElementById("read_more7")
let button8_face1 = document.getElementById("read_more8")

// box button tow
let all_button_face2 = document.querySelectorAll(".Articles .contaner .menue-ARTICLEs .box_face2 > .less")
let button1_face2 = document.getElementById("read_Less1")
let button2_face2 = document.getElementById("read_Less2")
let button3_face2 = document.getElementById("read_Less3")
let button4_face2 = document.getElementById("read_Less4")
let button5_face2 = document.getElementById("read_Less5")
let button6_face2 = document.getElementById("read_Less6")
let button7_face2 = document.getElementById("read_Less7")
let button8_face2 = document.getElementById("read_Less8")

//more 
all_button_face2.forEach(
function(){
con_cox.forEach(
    function(){
        button1_face1.onclick=function(){
            con_cox.forEach(function(ele){if(ele.classList.contains("rotate_con_box")){ele.classList.remove("rotate_con_box")}})
            all_button_face2.forEach(function(ele){if(ele.classList.contains("less_animation")){ele.classList.remove("less_animation")}}),
            button1_face2.parentElement.classList.add("less_animation")
            con_cox1.classList.add("rotate_con_box")
            }
            button2_face1.onclick= function(){
            con_cox.forEach(function(ele){if(ele.classList.contains("rotate_con_box")){ele.classList.remove("rotate_con_box")}})
            all_button_face2.forEach(function(ele){if(ele.classList.contains("less_animation")){ele.classList.remove("less_animation")}}),
            button2_face2.parentElement.classList.add("less_animation")
            con_cox2.classList.add("rotate_con_box")
            }
            button3_face1.onclick=function(){
                con_cox.forEach(function(ele){if(ele.classList.contains("rotate_con_box")){ele.classList.remove("rotate_con_box")}}),
                all_button_face2.forEach(function(ele){if(ele.classList.contains("less_animation")){ele.classList.remove("less_animation")}}),
                button3_face2.parentElement.classList.add("less_animation")
                con_cox3.classList.add("rotate_con_box")
                }
            button4_face1.onclick=function(){
                con_cox.forEach(function(ele){if(ele.classList.contains("rotate_con_box")){ele.classList.remove("rotate_con_box")}}),
                all_button_face2.forEach(function(ele){if(ele.classList.contains("less_animation")){ele.classList.remove("less_animation")}}),
                button4_face2.parentElement.classList.add("less_animation")
                con_cox4.classList.add("rotate_con_box")
                }
            button5_face1.onclick=function(){
                con_cox.forEach(function(ele){if(ele.classList.contains("rotate_con_box")){ele.classList.remove("rotate_con_box")}}),
                all_button_face2.forEach(function(ele){if(ele.classList.contains("less_animation")){ele.classList.remove("less_animation")}}),
                button5_face2.parentElement.classList.add("less_animation")
                con_cox5.classList.add("rotate_con_box")
                }
            button6_face1.onclick=function(){
                con_cox.forEach(function(ele){if(ele.classList.contains("rotate_con_box")){ele.classList.remove("rotate_con_box")}}),
                all_button_face2.forEach(function(ele){if(ele.classList.contains("less_animation")){ele.classList.remove("less_animation")}}),
                button6_face2.parentElement.classList.add("less_animation")
                con_cox6.classList.add("rotate_con_box")
                }
                button7_face1.onclick=function(){
                con_cox.forEach(function(ele){if(ele.classList.contains("rotate_con_box")){ele.classList.remove("rotate_con_box")}}),
                all_button_face2.forEach(function(ele){if(ele.classList.contains("less_animation")){ele.classList.remove("less_animation")}}),
                button7_face2.parentElement.classList.add("less_animation")
                con_cox7.classList.add("rotate_con_box")
                }
                button8_face1.onclick=function(){
                con_cox.forEach(function(ele){if(ele.classList.contains("rotate_con_box")){ele.classList.remove("rotate_con_box")}}),
                all_button_face2.forEach(function(ele){if(ele.classList.contains("less_animation")){ele.classList.remove("less_animation")}}),
                button8_face2.parentElement.classList.add("less_animation")
                con_cox8.classList.add("rotate_con_box")
                }
        
    }
)
}
)

// less

button1_face2.onclick = function(){
    con_cox1.classList.remove("rotate_con_box"),
        button1_face2.parentElement.classList.remove("less_animation")
};
button2_face2.onclick = function(){
    con_cox2.classList.remove("rotate_con_box"),
        button2_face2.parentElement.classList.remove("less_animation")
}
button3_face2.onclick = function(){
    con_cox3.classList.remove("rotate_con_box"),
    button3_face2.parentElement.classList.remove("less_animation")  
};
button4_face2.onclick = function(){
    con_cox4.classList.remove("rotate_con_box"),
        button4_face2.parentElement.classList.remove("less_animation")
};
button5_face2.onclick = function(){
    con_cox5.classList.remove("rotate_con_box"),
        button5_face2.parentElement.classList.remove("less_animation")
};
button6_face2.onclick = function(){
    con_cox6.classList.remove("rotate_con_box"),
        button6_face2.parentElement.classList.remove("less_animation")
}
button7_face2.onclick = function(){
    con_cox7.classList.remove("rotate_con_box"),
    button7_face2.parentElement.classList.remove("less_animation")  
};
button8_face2.onclick = function(){
    con_cox8.classList.remove("rotate_con_box"),
        button8_face2.parentElement.classList.remove("less_animation")
}
// features
let buMore1 = document.getElementById("more1")
let buMore2 = document.getElementById("more2")
let buMore3 = document.getElementById("more3")
buMore1.onclick = function(){
    document.getElementById("box1").classList.toggle("text_onclick"),
    document.getElementById("UlQuality").classList.toggle("UlQuality_on")
    if(document.getElementById("box1").classList.contains("text_onclick")){
        buMore1.innerHTML = "less"
        // console.log("hii");
    }else{
        buMore1.innerHTML = "more"
    }
    
};
buMore2.onclick = function(){
    document.getElementById("box2").classList.toggle("text_onclick"),
    document.getElementById("UlTime").classList.toggle("UlQuality_on")
    if(document.getElementById("box2").classList.contains("text_onclick")){
        buMore2.innerHTML = "less"
        // console.log("hii");
    }else{
        buMore2.innerHTML = "more"
    }
    
};
buMore3.onclick = function(){
    document.getElementById("box3").classList.toggle("text_onclick"),
    document.getElementById("UlPassion").classList.toggle("UlQuality_on")
    if(document.getElementById("box3").classList.contains("text_onclick")){
        buMore3.innerHTML = "less"
        // console.log("hii");
    }else{
        buMore3.innerHTML = "more"
    }
    
}
// send_data
let send_data = document.getElementById("send_data")
send_data.onclick = function(el){

    // el.preventDefault()
}
// Our Awesome Stats
let Stats = document.getElementById("Stats")
let Stats_h1 = document.querySelectorAll(".Stats .contaner .project .project_box h1")
let stoped = false ;
let skills = document.getElementById("Skills") ;
let progres = document.querySelectorAll(".SKILLS .contaner  .SKILLS_smal .box > div > span")

window.onscroll = function () {
    if(window.scrollY >= 400){
        up_toTop.style.display = `block`
        
    }else{
        up_toTop.style.display = `none`
    } ;
    if (window.scrollY >= skills.offsetTop - 200){
        progres.forEach((num) => progress(num))
    
    }
    if(window.scrollY >= Stats.offsetTop - 500){
        if(!stoped){
            Stats_h1.forEach((num) => creatcounter(num));
        }
        stoped = true ;
    };
}

function creatcounter(ele) {
    let prog = ele.dataset.progg ;
    let counter = setInterval(function(){
        ele.textContent ++
        if(ele.textContent == prog ){
            clearInterval(counter)
        }
    } , 3000/prog)
}
// outher skills 

// window.onscroll = function (){

// }

function progress(ele){
    let prog = ele.dataset.width ;
    ele.style.width = prog
}
// make douwn line form 
let userNeme = document.getElementById("text") ;
let userNemeS = document.getElementById("textS") ;
let Email = document.getElementById("email") ;
let Emails = document.getElementById("emailS") ;
let Numb = document.getElementById("number") ;
let NumbS = document.getElementById("numberS") ;
let textarea = document.getElementById("textarea") ;
let textareaS = document.getElementById("textareaS") ;

userNeme.oninput = function (){

    let conter = this.value.length ;
    userNemeS.style.width = `${(conter * 100) /userNeme.getAttribute("minlength") }%` ;
};
Email.oninput = function (){

    let conter = this.value.length ;
    Emails.style.width = `${(conter * 100) /Email.getAttribute("minlength") }%` ;
}
Numb.oninput = function (){

    let conter = this.value.length ;
    NumbS.style.width = `${(conter * 100) /Numb.getAttribute("minlength") }%` ;
}
textarea.oninput = function (){

    let conter = this.value.length ;
    textareaS.style.width = `${(conter * 100) /textarea.getAttribute("minlength") }%` ;
}

// // test
//  document.onclick = function(e){
//     console.log(e.target.id);
// }