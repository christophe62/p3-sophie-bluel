
async function getWorks() {
    const url = "http://localhost:5678/api/works";
    try {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    
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
    
    // Utilisation des backticks pour insérer les valeurs dynamiquement
    figure.innerHTML = `<img src="${data.imageUrl}" alt="${data.title}"><figcaption>${data.title}</figcaption>`;
				    
    document.querySelector(".gallery").append(figure);
}

