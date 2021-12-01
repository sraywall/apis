// console.log("hello world!")
const residentsBtn = document.querySelector("#btn")
let getResidents = () =>{
    axios.get('https://swapi.dev/api/planets/2').then((req,res) => {
        const {residents} = req.data
        for(resident of residents){
            //console.log(resident)
            axios.get(resident).then((req2,res) => {
                const {name} = req2.data
                const h2 = document.createElement("h2")
                h2.textContent = name
                const body = document.querySelector("body")
                body.append(h2)
                // console.log(name)
            })
        }
    })
}

residentsBtn.addEventListener("click",getResidents)
