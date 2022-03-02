const Base__Url = 'https://tribe.api.fdnd.nl/v1/member'
const postForm = document.querySelector('#postform')

const renderMember = (data) => {
    data.data.forEach(post => {
        // console.log(post)            
       const Api__member = document.querySelector('.api__member').innerHTML +=
       `<h4 class="test">${post.name} ${post.surname}</h4>`
   
    })

}


// red the post
// method: Get

fetch(Base__Url)
    .then(res =>  res.json())
    .then(data => renderMember(data))


// Nieuwe members toevoegen

postForm.addEventListener('submit', (event) => {
    event.preventDefault()
 

})




    

   