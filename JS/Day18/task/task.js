const callback = (result) => {
    console.log("Callback:", result);
};

function processData(callback) {
    callback("Data processed successfully");
}

processData(callback);





const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise fulfilled successfully");
    } else {
        reject("Promise rejected");
    }
});





promise
    .then((result) => {
        console.log("Then:", result);
    })
    .catch((error) => {
        console.log("Catch:", error);
    })
    .finally(() => {
        console.log("Finally: Promise completed");
    });





    async function getData() {
    try {
        let result = await promise;
        console.log("Async/Await:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();





fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("Fetched Data:", data);
    })
    .catch((error) => {
        console.log("Fetch Error:", error);
    });