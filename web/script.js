document.addEventListener("DOMContentLoaded",async function foo(){
    let myInfo = (
    {
        firstName:"Levon",
        lastName:"Kehyan",
        birthDay:"2002-10-29",
        gender:"male",
    });
    // let json = JSON.stringify(myInfo);
    // let xhr = new XMLHttpRequest();

    // xhr.open("POST", "http://intern-2022.arpify.com/init");
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(json);

    const options = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(myInfo)
    };
    const response = await fetch('http://intern-2022.arpify.com/init', options);
    if(response.status == 200)
    {
        const data = await response.json();
        let tableBody = document.querySelector('tbody');
        console.log(data);
        let flag = false;
        for (let el of data)
        {
            if(flag == false)
            {//-FIRST WITH 'COUNT ELEMENT'
                flag = true;
                continue;
            }
            let tr = document.createElement('tr');
            let tdFirstName = document.createElement('td');
            let tdLastName = document.createElement('td');
            let tdBirthDay = document.createElement('td');
            let tdGender = document.createElement('td');
            tdFirstName.innerText = el.firstName;
            tdLastName.innerText = el.lastName;
            tdBirthDay.innerText = el.birthDay;
            tdGender.innerText = el.gender;
            if(el.firstName == myInfo.firstName && el.lastName == myInfo.lastName && el.birthDay == myInfo.birthDay && el.gender == myInfo.gender)
            {
                tr.style.backgroundColor = 'red';
            }
            tr.appendChild(tdFirstName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdBirthDay);
            tr.appendChild(tdGender);
            tableBody.appendChild(tr);
        }


    }
});


