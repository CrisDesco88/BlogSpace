let postArray = [];
const postsForm = document.getElementById('posts-form');
const blogList = document.getElementById('blog-list');

function renderPosts(){
    let content= '';
        content = postArray.map((post)=>{ 
        content += `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        `
        blogList.innerHTML = content
    })
}
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postArray = data.slice(0, 5)
    renderPosts()   
        
})

/* Otra forma de hacerlo*/
// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//         postsArray = data.slice(0, 5)
//         let html = ""
//         for (let post of postsArray) {
//             html += `
//                 <h3>${post.title}</h3>
//                 <p>${post.body}</p>
//                 <hr />
//             `
//         }
//         blogList.innerHTML = html
//     })


postsForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const postTitle = document.getElementById('post-title').value;
    const postBody = document.getElementById('post-body').value;
    const data = {
        title: postTitle,
        body: postBody
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postArray.unshift(post)
            renderPosts()
    })

    postsForm.reset()
})

