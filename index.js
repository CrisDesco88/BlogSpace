fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let content= '';
        content = postsArr.map((post)=>{ 
        content += `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        `
        document.getElementById('blog-list').innerHTML = content
    })
        
})

/* Otra forma de hacerlo*/
// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//         const postsArr = data.slice(0, 5)
//         let html = ""
//         for (let post of postsArr) {
//             html += `
//                 <h3>${post.title}</h3>
//                 <p>${post.body}</p>
//                 <hr />
//             `
//         }
//         document.getElementById("blog-list").innerHTML = html
//     })
document.getElementById('new-post').addEventListener('submit', (e)=>{
    e.preventDefault();
    const postTitle = document.getElementById('post-title').value;
    const postBody = document.getElementById('post-body').value;
    const data = {
        title: postTitle,
        body: postBody
    }
    console.log(data)
})
