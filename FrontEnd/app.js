
async function getWorks() {
    const url = "http://localhost:5678/api/works";
    try {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    for (let i = 0; i< json.length; i++) {
        setFigure(json[i]);
    }
    } catch (error) {
    console.error('Error:', error);
    }
    }

getWorks();

   
function setFigure(data) {   
    const figure = document.createElement("figure");
    
    figure.innerHTML = `<img src="${data.imageUrl}" alt="${data.title}"><figcaption>${data.title}</figcaption>`;
				    
    document.querySelector(".gallery").append(figure);
}

async function getCategories() {
    const url = "http://localhost:5678/api/categories";
    try {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    
     for (let i = 0; i< json.length; i++) {
         setFilter(json[i]);
      }
    } catch (error) {
    console.error('Error:', error);
    }
    }

    getCategories();

   

    function setFilter(data) {
         const div = document.createElement("div");
    
         div.innerHTML = `${data.name}`;
                        
         document.querySelector(".div-container").append(div);
     }
