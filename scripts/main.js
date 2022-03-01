const post__list = document.querySelector('.posts__list')
const Base__Url = 'https://tribe.api.fdnd.nl/v1/member'
// let output = 'hallo';

// red the post
// method: Get

fetch(Base__Url)
    .then(response => response.json())
    .then(data => {
        data.data.forEach(post => {
            post__list.innerHTML +=`
            <article >
            <h2>Updating informatie</h2>

           </article> `
            
            
            
        })
        
    })
