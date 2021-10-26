let postel = document.getElementById("post");
let postInputel = document.getElementById("postInput")
let postIdInputel = document.getElementById("postIdInput")
let postNameInputel = document.getElementById("postNameInput")
let postAgeInputel = document.getElementById("postAgeInput")
let postResultel = document.getElementById("postResult")

let formData = {
    id:"",
    name:"",
    age:""
}


postIdInputel.addEventListener("change", function(event) {
    formData.id = event.target.value;
});

postNameInputel.addEventListener("change", function(event) {
    formData.name = event.target.value;
});

postAgeInputel.addEventListener("change", function(event) {
    formData.age = event.target.value;
});

const postMethod = () => {
    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:9000'
        },
        body: JSON.stringify(formData)
      
    };
    console.log(formData)
        let url = postInputel.value;
        console.log(url);

        fetch(url, options)
          .then(function(response) {
            return response.json();
          })
          .then(function(jsonData) {
            console.log(jsonData);
          });
}


postel.addEventListener("submit", function(event){
    event.preventDefault();
    postMethod();
  });