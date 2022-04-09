let form = document.querySelector("form");
form.addEventListener('submit', async function(event)
{
    event.preventDefault();
    let formData = new FormData();
    formData.append('firstName',document.querySelector('#firstName').value);
    formData.append('lastName',document.querySelector('#lastName').value);
    formData.append('birthDay',document.querySelector('#birthDay').value);
    formData.append('gender',document.querySelector('#gender').value);
    formData.append('photo',document.querySelector('#photo').files[0], {type:"multipart/form-data"});
    formData.append('pdfFile',document.querySelector('#pdfFile').files[0],{type:"multipart/form-data"});
    
    const options =
    {
        method: 'POST',
        body: formData,
    };
    const response = await fetch('http://intern-2022.arpify.com/form', options);
    if(response.status == 200)
    {
        const data = await response.json();
        console.log(data);
    }
});