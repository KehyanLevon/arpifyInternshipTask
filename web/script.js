let myInfo = (
{
    "firstName":"Levon",
    "lastName":"Kehyan",
    "birthDay":"29-10-2002",
    "gender":"male",
});


let json = JSON.stringify(myInfo);
let xhr = new XMLHttpRequest();

xhr.open("POST", 'http://intern-2022.arpify.com/init')
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(myInfo);
