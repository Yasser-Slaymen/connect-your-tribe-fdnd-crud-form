const Base__Url = 'https://tribe.api.fdnd.nl/v1'
const form = document.querySelector('#memberform')

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

form?.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log('halll')

    // LET values
    let member = {
        memberId: ParseInt(memberForm.elements.memberId.value),
            squadId: ParseInt(memberForm.elements.squadId.value),
        type: memberForm.elements.type.value,
        nickname: memberForm.elements.nickname.value,
        name: memberForm.elements.name.value,
        prefix: memberForm.elements.prefix.value,
        surname: memberForm.elements.surname.value,
            avatar: memberForm.elements.avatar.value,
            githubHandle: memberForm.elements.githubHandle.value,
        bio: memberForm.elements.bio.value,
            url: memberForm.elements.url.value,
      }

    // fetching api
    fetch(Base__Url, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(function (res) {
        return res.json;
    }).catch(
        error => console.log(error)
    )
})








    

   