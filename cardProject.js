let users = [
  {
    name: "moto anti",
    pic: "https://images.unsplash.com/photo-1712083379960-1faca9eacc26?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Hallo I Look Very Gogious and i am very Beautiful Women",
  },

  {
    name: "alxandar shehzadi",
    pic: "https://images.unsplash.com/photo-1761839256840-7780a45b85dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    bio: "Hallo i am a barber in the profession and beautiful Women",
  },

  {
    name: "lexyda meta",
    pic: "https://images.unsplash.com/photo-1770009079271-4c3764aabffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    bio: "hallo i am pretty and i am a model in the profession and i am very beautiful",
  },

  {
    name: "tenny",
    pic: "https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    bio: "i am loverly girl",
  },
  {
    name: "tony tina",
    pic: "https://plus.unsplash.com/premium_photo-1770590186766-7c3163527211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
    bio: "we love each other and very good couple",
  },
];
function showuser(arr) {
  arr.forEach(function (user) {
    // outer div created
    // const flexGapDiv = document.createElement("div");
    // flexGapDiv.classList.add("flex-gap");
    // 2. Create the card div (class="card")
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    // 3. Create the image element
    const img = document.createElement("img");
    img.src = user.pic;
    img.alt = "image";
    img.classList.add("img-card");
    // 4. Create the blurred layers div (class="bllured-layers")
    const blurredLayersDiv = document.createElement("div");
    blurredLayersDiv.style.backgroundImage=`url(${user.pic})`;
    blurredLayersDiv.classList.add("bllured-layers");
    // 5. Create the content div (class="content")
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    // 6. Create the h3 title
    const h3 = document.createElement("h3");
    h3.textContent = user.name;
    // 7. Create the paragraph
    const p = document.createElement("p");
    p.textContent = user.bio;
    // content div ka andar childs ko append karna ha
    contentDiv.appendChild(h3);
    contentDiv.appendChild(p);
    // Step B: Put the img, blurred layer, and content div inside the card div
    cardDiv.appendChild(img);
    cardDiv.appendChild(blurredLayersDiv);
    cardDiv.appendChild(contentDiv);
    // all the content put karna flec-div ka andar \
    // flexGapDiv.appendChild(cardDiv);
    // Step D: Finally, attach everything to the visible webpage body
    // document.body.appendChild(flexGapDiv);
     let container = document.querySelector(".flex-gap");

 container.appendChild(cardDiv);
  });
}
showuser(users);
 let search=document.querySelector(".search")
search.addEventListener("input",function(){
    // console.log(search.value)
 let newusers =users.filter(function(user){
return user.name.startsWith(search.value)
});
document.querySelector(".flex-gap").innerHTML="";
showuser(newusers);
});