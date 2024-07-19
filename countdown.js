const endDate="18 july 2024 01:34 Am";

document.getElementById("end-date").innerHTML=endDate;
// const input=document.querySelectorAll("input")
const input =document.getElementsByTagName("input");

function clock()
{
    const end =new Date(endDate);
    const now=new Date();
    console.log(end);
    console.log(now);
    
    // differnce btwn end - now for calculate miliseconds

    const diffe = (end-now)/1000;
    console.log(diffe);
     
    if(diffe<0)
        {
            alert("happy birthday dear !")
            return;
        }

    // convert into days
    input[0].value=(Math.floor(diffe/3600/24));  //in input access value using input.value
    input[1].value=(Math.floor(diffe/3600)%24);     //milisecond in divide 3600 second and module 24 and remainder is hrs
    input[2].value=(Math.floor(diffe/60)%60);     //convder into minute
    input[3].value=(Math.floor(diffe)%60);            //convert into second
}

clock();

setInterval(()=>{return clock()},1000)