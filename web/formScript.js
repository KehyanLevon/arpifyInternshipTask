// let btn = document.querySelector('#send');
// btn.addEventListener('click',async function()
let form = document.querySelector("form");
form.addEventListener('submit', async function(event)
{
    event.preventDefault();
    console.log(document.querySelector('#photo').files[0]);
    let formData = new FormData(form);
    formData.append('firstName','Levom');
    formData.append('lastName','Kehyan');
    formData.append('birthDay','2002-10-29');
    formData.append('gender','male');
    formData.append('photo',document.querySelector('#photo').files[0]);
    formData.append('pdfFile',document.querySelector('#pdfFile').files[0]);

    let formInfo =
    {
        firstName:`${form.elements[0].value}`,
        lastName:`${form.elements[1].value}`,
        birthDay:`${form.elements[2].value}`,
        gender:`${form.elements[3].value}`,
        photo:`${form.elements[4].value}`,
        pdfFile:`${form.elements[5].value}`,
    }
    let obj =
    {
        firstName:document.querySelector('#firstName').value,
        lastName:document.querySelector('#lastName').value,
        birthDay:document.querySelector('#birthDay').value,
        gender:document.querySelector('#gender').value,
        photo:document.querySelector('#photo').value,
        pdfFile:document.querySelector('#pdfFile').value,
    }
    let obj1 =
    {
        firstName:'Levon',
        lastName:'Kehyan',
        birthDay:'2002-10-29',
        gender:'male',
        photo:'C:\Users\Levon\Desktop\U999_2_881x513.jpeg',
        pdfFile:'C:\Users\Levon\Desktop\Levon Kehyan (2).pdf',
    }
    const options =
    {
        method:'POST',
        headers:
        {
            'Content-Type':'multipart/form-data'
        },
        body:formData,
    };
    console.log(formData); 
    console.log(formData.elements);
    const response = await fetch('http://intern-2022.arpify.com/form', options);
    const data = await response.json();
    console.log(response);
    console.log(data);
    console.log(formInfo);
});

