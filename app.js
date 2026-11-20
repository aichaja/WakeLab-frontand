
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

const chargerActivites = async () => {
  try {
    const response = await api.get("/activites");
    return response.data;
  } catch (error) {
    console.error(error.response?.data?.message ?? "API inaccessible");
    return [];
  }


};

chargerActivites()
  .then((data) => {
    console.log(data)
    Affichagedesactivites(data)
    // Ajoutduneactivite(data)

  })






const btn = document.getElementById("btn")
const user = document.getElementById("user")
const namef = document.getElementById("name")

const modifi = document.getElementById("modifi")
const form = document.getElementById("form1")
const erroruser =document.getElementById("erreur-user")

modifi.addEventListener("click", () => {
  form.classList.toggle("hidden")
  erroruser.classList.add("hidden")
})

function Validationusername(value) {
    let Regex =  /^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)+$/u;
    if(!Regex.test(value)) throw new Error("user-name is not valid");
}


btn.addEventListener("click", (e) => {
  e.preventDefault()
    try{
      Validationusername(user.value)
      localStorage.setItem("username", user.value)
      namef.textContent = user.value

      erroruser.classList.add("hidden")

      form.classList.add("hidden")
    }
    catch(erreur){
      erroruser.textContent = erreur.message
      erroruser.classList.remove("hidden")
    }
    
})
namef.textContent = localStorage.getItem("username")




function Affichagedesactivites(data) {

  const cards = document.getElementById("cards")
  data.forEach(element => {
    const card = document.createElement("div")


    const theme = document.createElement("div")
    const duree = document.createElement("p")
    const titre = document.createElement("h3")
    const description = document.createElement("p")
    const objectifs = document.createElement("p")
    const khat = document.createElement("div")
    const auteur = document.createElement("h4")


    theme.classList = "bg-[#ABC6E7] rounded-lg text-sm font-medium px-4 w-[25%]"
    duree.className = "flex items-center gap-2"
    titre.className = "font-bold text-xl text-[#ecbfa8]"
    description.className = "text-sm"
    objectifs.className = "text-sm"
    khat.classList = "flex items-center justify-between border-t pt-3"


    theme.textContent = element.theme
    duree.textContent = element.duree + "min"
    titre.textContent = element.titre
    description.textContent = element.description
    objectifs.textContent = element.objectifs
    auteur.textContent = element.auteur



    card.appendChild(theme)
    card.appendChild(duree)
    card.appendChild(titre)
    card.appendChild(description)
    card.appendChild(objectifs)
    card.appendChild(auteur)

    khat.appendChild(auteur)
    card.appendChild(khat)

    cards.appendChild(card)

  })

}






const ajout = document.getElementById("ajout")
const form2 = document.getElementById("form2")
const creer = document.getElementById("creer")
const titre = document.getElementById("ajouttitre")
const erreur_titre = document.getElementById("erreur-titre")

const theme = document.getElementById("ajoutTheme")
const duree = document.getElementById("ajoutduree")
const description = document.getElementById("ajoutdescription")
const objectifs = document.getElementById("ajoutobjectifs")



ajout.addEventListener("click", () => {
  form2.classList.toggle("hidden")
  
})











