let nowPlingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let nowPlaying = document.getElementById("NowPlaying");
let PopularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let Popular = document.getElementById("Popular");
let TopRatedUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let TopRated = document.getElementById("TopRated");
let UpcomingUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let Upcoming = document.getElementById("Upcoming");
let TrendingUrl ="https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let Trending = document.getElementById("Trending");


let posts=[];
let allPOsts;
async function getdata( url)
{
    let apiResponse = await fetch(url) ;  //GET
        posts = await apiResponse.json();
        allPOsts= posts.results;
        displayPosts();

}
 getdata(nowPlingUrl);


function displayPosts()
{
    let cartoona =``;

    for(let i=0 ; i< allPOsts.length ; i++ )
    {
        cartoona +=`     
            <div class="col-md-4">
                <div class="view my-3">
                    <img class="w-100 rounded" src="https://image.tmdb.org/t/p/w500/${allPOsts[i].poster_path}">
                    <div class="layer p-5">
                        <h2>${allPOsts[i].title}</h2>
                        <p>${allPOsts[i].overview}</p>
                        <p>rate : ${allPOsts[i].vote_average}</p>
                        <p>${allPOsts[i].release_date}</p>

                    </div>
                </div>
            </div>`

    }
    document.getElementById("myRow").innerHTML= cartoona;
}



// search in view posts of movie that fount in html page 
let searchMovieHtml = document.getElementById("searchMovieHtml");

function searchMovie(searchTearm) 
{
    let cartoona ='';

    for(let i=0 ; i< allPOsts.length ; i++ )
    {
        if(allPOsts[i].title.toLowerCase().includes(searchTearm.toLowerCase()) ==true)
        {
            cartoona +=`
            <div class="col-md-4">
            <div class="view my-3">
                <img class="w-100 rounded" src="https://image.tmdb.org/t/p/w500/${allPOsts[i].poster_path}">
                <div class="layer p-5">
                    <h2>${allPOsts[i].title}</h2>
                    <p>${allPOsts[i].overview}</p>
                    <p>rate : ${allPOsts[i].vote_average}</p>
                    <p>${allPOsts[i].release_date}</p>

                </div>
            </div>
        </div>`
        }
      
    }
    document.getElementById("myRow").innerHTML= cartoona;

    
}

searchMovieHtml.addEventListener("keyup", function(){
    searchMovie(searchMovieHtml.value);

});



// content of navbar

nowPlaying.addEventListener("click",function(){
    getdata(nowPlingUrl)
});
Popular.addEventListener("click",function(){
    getdata(PopularUrl)
});
TopRated.addEventListener("click",function(){
    getdata(TopRatedUrl)
});
Upcoming.addEventListener("click",function(){
    getdata(UpcomingUrl)
});
Trending.addEventListener("click",function(){
    getdata(TrendingUrl)
});




$("#open").click(function(){
    $("#navLogo").animate({left:"250px"},1000);
    $("#navContent").animate({left:"0px"},1000);
    $(".content .item1").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 2000);

    $(".content .item2").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 2000);

    
    $(".content .item3").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 2000);

    
    $(".content .item4").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 2000);

    
    $(".content .item5").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 2000);

    
    $(".content .item6").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 2000);
    
})
$("#close").click(function(){
    // let navWidth =$("navContent").innerWidth();

    $("#navLogo").animate({left:"0px"},1000);
    $("#navContent").animate({left:"-250px"},1000);
})

// $("#close").click(function(){
//     // $("#nav").hide();
//     let navWidth = $("#nav").innerWidth();

//     $("#nav").animate({left:`-${navWidth}`},1000);
//     $("#open").animate({left:"15px"},1000);


// })


// search by word in all movies

let searchMovieByWord = document.getElementById("allMovies");
searchMovieByWord.addEventListener("keyup",function(){
    let searchMovieByWordUrl= `https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${searchMovieByWord.value}`;
    getdata(searchMovieByWordUrl);
});


//validation 

let userNameInput = document.getElementById("userName");
let userEmailInput = document.getElementById("userEmail");
let userPhoneInput = document.getElementById("userPhone");
let userAgeInput = document.getElementById("userAge");
let userPasswordInput = document.getElementById("userPassword");
let userRePasswordInput = document.getElementById("userRePassword");
let validName = false;
let validAge = false;
let validMail = false;
let validPhone = false;
let validPW = false;
let validRePW = false;



// let userNameAlert = document.getElementById("namealert");


function validateName()
{
    var regexName=/^[A-Za-z0-9]+$/;
    if(regexName.test(userNameInput.value) ==true )
    {
        $(".alert-name").hide(500);
        validName=true;
        contact();
    }
    else
    {
        $(".alert-name").show(500);
    }
}
userNameInput.addEventListener("blur",validateName);


function validateEmail()
{
    var regexMail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(regexMail.test( userEmailInput.value) ==true )
    {
        validMail=true;
        $(".alert-mail").hide(500);
        contact();
    }
    else
    {
        $(".alert-mail").show(500);
    }
}
userEmailInput.addEventListener("blur",validateEmail);

function validatePhone()
{
    var regexPhone=/^(002)?01[0125][0-9]{8}$/;
    if(regexPhone.test( userPhoneInput.value) ==true )
    {
        $(".alert-phone").hide(500);
        validPhone=true;
        contact();
    }
    else
    {
        $(".alert-phone").show(500);
    }
}
userPhoneInput.addEventListener("blur",validatePhone);


function validateAge()
{
    var regexAge=/^([1-9][0-9]|100)$/;
    if(regexAge.test( userAgeInput.value) == true )
    {
        $(".alert-age").hide(500);
        validAge =true;
        contact();
    }
    else
    {
        $(".alert-age").show(500);
    }
}
userAgeInput.addEventListener("blur",validateAge);


function validatePassword()
{
    var regexPassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regexPassword.test( userPasswordInput.value) == true )
    {
        $(".alert-pw").hide(500);
        validPW=true;
        contact();
    }
    else
    {
        $(".alert-pw").show(500);
    }
}
userPasswordInput.addEventListener("blur",validatePassword);

function validateRePassword()
{
    if(userRePasswordInput.value== userPasswordInput.value)
    {
        $(".alert-re-pw").hide(500);
        validRePW= true;
        contact();
    }
    else
    {
        $(".alert-re-pw").show(500);
    }
}
userRePasswordInput.addEventListener("blur",validateRePassword);



submitBtn = document.getElementById("submitBtn");

function contact()
{
    if( validName && validAge &&validRePW && validMail && validPW && validPhone == true)
    {
        submitBtn.disabled = false;
    }
    else
    {
        submitBtn.disabled = true;
    }
}


submitBtn.addEventListener("click",contact);
