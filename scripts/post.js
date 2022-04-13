const formmember = document.querySelector('#memberForm');
const BaseUrl = 'https://tribe.api.fdnd.nl/v1/member'

formmember.addEventListener('submit', (post) => {
    post.preventDefault()
    console.log(squadId.value)
    
     // Create a data object with data from the create form.
     let data = {
        memberId: document.querySelector('#memberId').value,
        squadId: document.querySelector('#squadId').value,
        type: document.querySelector('#type').value,
        nickname: document.querySelector('#nickname').value,
        name: document.querySelector('#name').value,
        prefix: document.querySelector('#prefix').value,
        surname: document.querySelector('#surname').value,
        avatar: document.querySelector('#avatar').value,
        githubHandle: document.querySelector('#githubHandle').value,
        bio: document.querySelector('#bio').value,
        url: document.querySelector('#url').value,
    }

     // Send the form data to the API
     fetch(BaseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => renderMember(data))
   
      .catch(
        error => console.log('error')
      )

    
})