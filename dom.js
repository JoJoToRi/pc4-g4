export const celdas = document.querySelectorAll(".cell"); 
export function resetCeldas(celdas) {
    celdas.forEach((celda) => (celda.innerHTML = ""));
  }
export function resetResult(){
    document.querySelector("#result").innerHTML = "";

}
