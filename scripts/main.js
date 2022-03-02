const Base__Url = 'https://tribe.api.fdnd.nl/v1'

const renderMember = (data) => {
    data.data.forEach(post => {
        // console.log(post)            
       const Api__member = document.querySelector('.api__member').innerHTML +=
       ` <article class="studenten__api">
          <h4 class="te">${post.name} ${post.surname}</h4>
        </article>`
   
    })

}

// red the post
// method: Get

fetch(Base__Url + '/member')
    .then(res =>  res.json())
    .then(data => renderMember(data))


// Nieuwe members toevoegen






    

   