const URL = 'https://randopic.herokuapp.com/images/2002'

let comments = document.getElementById('comments')
document.addEventListener('DOMContentLoaded', renderData())

let likeBtn = document.getElementById('like_button')
likeBtn.addEventListener('click', () => {
let likes = document.getElementById('likes')
likes.textContent++
fetch('https://randopic.herokuapp.com/likes', {
  method: 'POST',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
  body: JSON.stringify({image_id: 2002})
})
})

let form = document.getElementById("comment_form")
let comment = document.getElementById('comment_input')
form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  let li = document.createElement('li')
  li.textContent = comment.value
  comments.appendChild(li)
  fetch('https://randopic.herokuapp.com/comments', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    body: JSON.stringify({image_id: 2002, content: comment.value})
  })
})


function renderData() {
  fetch(URL)
    .then(response => response.json())
    .then(json => getData(json))
}

function getData(data) {
  let img = document.getElementById('image')
  let name = document.getElementById('name')
  let likes = document.getElementById('likes')
  img.src = data.url
  name.textContent = data.name
  likes.textContent = data.like_count
  for (let i = 0; i < data.comments.length; i++) {
    let li = document.createElement('li')
    li.textContent = data.comments[i].content
    comments.appendChild(li)
  }
}
