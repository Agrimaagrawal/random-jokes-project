const jokes=document.querySelector('#jokes');
const jokebtn=document.querySelector('#jokebtn');
/*
const somejoke=()=>{
    const setheader={
        headers:{
            Accept:"application/json"
    
        }
    }
    fetch('https://icanhazdadjoke.com',setheader)
    .then((res)=> res.json())
    .then ((data)=>{
        jokes.innerHTML= data.joke;

    }).catch((error)=>{
        console.log(error);
    })
}*/
const somejoke= async()=>{
    try{
    const setheader={
        headers:{
            Accept:"application/json"
    
        }
    }
    
    const res=await fetch('https://icanhazdadjoke.com',setheader)
    const data= await res.json();
    jokes.innerHTML= data.joke;
    }catch(error){
        console.log(error);
    }

}



jokebtn.addEventListener('click',somejoke);
somejoke();