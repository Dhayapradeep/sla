// API 1: Users

const usersShow = document.querySelector("#usersData");

const getUsers = async () => {
    const getfromApi = await fetch("https://dummyjson.com/users");

    const dataChange = await getfromApi.json();

    const result = dataChange.users;

    console.log("Users:", result);

    result.map((e) => {
        usersShow.innerHTML += `
            <tr>
                <td>${e.id}</td>
                <td>${e.firstName}</td>
                <td>${e.lastName}</td>
                <td>
                    <img src="${e.image}" alt="${e.firstName}">
                </td>
            </tr>
        `;
    });
};

getUsers();


// API 2: Products

const productsShow = document.querySelector("#productsData");

const getProducts = async () => {
    const getfromApi = await fetch("https://dummyjson.com/products");

    const dataChange = await getfromApi.json();

    const result = dataChange.products;

    console.log("Products:", result);

    result.map((e) => {
        productsShow.innerHTML += `
            <div class="product-card">
                <img src="${e.thumbnail}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>Price: $${e.price}</p>
                <p>Category: ${e.category}</p>
            </div>
        `;
    });
};

getProducts();


// API 3: Posts

const postsShow = document.querySelector("#postsData");

const getPosts = async () => {
    const getfromApi = await fetch("https://dummyjson.com/posts");

    const dataChange = await getfromApi.json();

    const result = dataChange.posts;

    console.log("Posts:", result);

    result.map((e) => {
        postsShow.innerHTML += `
            <div class="post">
                <h3>${e.id}. ${e.title}</h3>
                <p>${e.body}</p>
                <p>User ID: ${e.userId}</p>
            </div>
        `;
    });
};

getPosts();


// API 4: Comments

const commentsShow = document.querySelector("#commentsData");

const getComments = async () => {
    const getfromApi = await fetch("https://dummyjson.com/comments");

    const dataChange = await getfromApi.json();

    const result = dataChange.comments;

    console.log("Comments:", result);

    result.map((e) => {
        commentsShow.innerHTML += `
            <div class="comment">
                <p><strong>Comment:</strong> ${e.body}</p>
                <p><strong>Post ID:</strong> ${e.postId}</p>
                <p><strong>User:</strong> ${e.user.fullName}</p>
                <p><strong>Likes:</strong> ${e.likes}</p>
            </div>
        `;
    });
};

getComments();


// API 5: Todos

const todosShow = document.querySelector("#todosData");

const getTodos = async () => {
    const getfromApi = await fetch("https://dummyjson.com/todos");

    const dataChange = await getfromApi.json();

    const result = dataChange.todos;

    console.log("Todos:", result);

    result.map((e) => {
        todosShow.innerHTML += `
            <div class="todo">
                <p><strong>Todo:</strong> ${e.todo}</p>
                <p><strong>Completed:</strong> ${e.completed}</p>
                <p><strong>User ID:</strong> ${e.userId}</p>
            </div>
        `;
    });
};

getTodos();