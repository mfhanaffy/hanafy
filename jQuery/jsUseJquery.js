$(document).ready(
    $(".Articles .contaner .menue-ARTICLEs .box_face2 > .less").addClass("less_animation"),
    $("#active").on("click", function(){
        $("#menu").toggleClass("opacety_menue")
    }),

    $(document).on("scroll" , function(){
        if($(document).scrollTop() >= 200){
            $("#up_toTop").removeClass("up_toTop")
        }else if ($(document).scrollTop() < 200){
            $("#up_toTop").addClass("up_toTop")
        };
        if($(document).scrollTop() >= $("#Skills").offset().top -200 ){
            $(".SKILLS .contaner  .SKILLS_smal .box > div > span").each(function(){

                let prog = this.dataset.width ;
                this.style.width = prog
            })
        }
    }),
    $("#up_toTop").on("click" , function(){
        $(document).scrollTop("0") 
    }),
    $(".Articles .contaner .menue-ARTICLEs .box_face1 .more a").on("click" , function(){
        $(".Articles .contaner .menue-ARTICLEs .con_box").each(function(){
            $(".Articles .contaner .menue-ARTICLEs .con_box").removeClass("rotate_con_box")
        })
        $(this).parent().parent().parent().addClass("rotate_con_box") 
    }),
    $(".Articles .contaner .menue-ARTICLEs .box_face2 > .less").on("click" , function(){
        $(".Articles .contaner .menue-ARTICLEs .con_box").each(function(){
            $(".Articles .contaner .menue-ARTICLEs .con_box").removeClass("rotate_con_box")
        }) 
    }),
    $(".features .contaner .box1 .text a").on("click" , function(){
        // $(".features .contaner .box1 .text").each(function(){
        //     $(".features .contaner .box1 .text").removeClass("text_onclick")
        // })
        if( $(this).text() === "less"){
            $(this).parent().removeClass("text_onclick") ;
            $(this).parent().find("ul").removeClass("UlQuality_on");
            $(this).text("More")
        }else if ( $(this).text() === "More") {
            $(this).parent().addClass("text_onclick");
            $(this).parent().find("ul").addClass("UlQuality_on");
            $(this).text("less")
        } 
    }),
    window.setInterval(function(){
    let dateevent = new Date("march 13, 2022 23:59:59").getTime();
    let date = new Date().getTime() ;
    
    let darediff = dateevent - date ;
    
    let day = Math.floor(darediff / (1000 * 60 * 60 * 24)) ;
    let hour = Math.floor(darediff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) ;
    let minute = Math.floor(darediff % (1000 * 60 * 60 ) / (1000 * 60 )) ;
    let Second = Math.floor(darediff % (1000 * 60 ) / (1000 )) ;
    
    $("#days").text(day) ;
    $("#hours").text(hour) ;
    $("#minutes").text(minute) ;
    $("#Seconds").text(Second) ;
    if( darediff <=  0 ){
        clearInterval(counter);
        days.innerHTML = 0 ;
        hours.innerHTML = 0 ;
        minutes.innerHTML = 0 ;
        Seconds.innerHTML = 0 ;
    }
    }, 1000),
    $(document).click(function(e){
        if(e.target.id !== "active"){
        $("#menu").removeClass("opacety_menue")
        }else if (e.target.id === "menu"){
        $("#menu").removeClass("opacety_menue")
        }
        console.log(e.target.id);
    })
)
// Our Awesome Stats
let Stats = document.getElementById("Stats")
let Stats_h1 = document.querySelectorAll(".Stats .contaner .project .project_box h1")
let stoped = false ;
let skills = document.getElementById("Skills") ;
let progres = document.querySelectorAll(".SKILLS .contaner  .SKILLS_smal .box > div > span")

window.onscroll = function () {
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