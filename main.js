// console.log("hello world!")
const residentsBtn = document.querySelector("#btn")
let getResidents = () =>{
    axios.get('https://swapi.dev/api/planets?search=alderaan').then((res) => {
        // console.log(res.data.results[0])
        const alderaan = res.data.results[0]
        // console.log("alderaan",alderaan)
        const {residents} = alderaan
        // console.log(residents)
        for(resident of residents){
            //console.log(residents[i])
            axios.get(resident).then((res) => {
                const {name} = res.data
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
