document.addEventListener("DOMContentLoaded",  async function foo(){
    let myInfo = (
    {
        firstName:"Levon",
        lastName:"Kehyan",
        birthDay:29-10-2002,
        gender:"male",
    });
    let json = JSON.stringify(myInfo);
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "http://intern-2022.arpify.com/init");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);

    // const options = {
    //   method:'POST',
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   body:JSON.stringify(myInfo)
    // };
    // const response = await fetch('http://intern-2022.arpify.com/init', options);
    // console.log(response);
    // const data = await response.json();
    // console.log(data);
});