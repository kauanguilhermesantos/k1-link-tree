function ToggleMode(){
  const html = document.documentElement /*Atribui um endereço a tag html*/
  html.classList.toggle('dark'); /*Procura no html o class "dark" e executa a mudança de mode*/

  const img = document.querySelector("#profile img") /*Atribui um endereço a tag img*/

  if(html.classList.contains('dark')){ /*Se a class for "dark"*/
    img.setAttribute('src', 'assets/profile-light.jpg') /*Vai atribuir o profile-light ao src*/
  } else { /*Senão*/
    img.setAttribute('src', 'assets/profile-dark.jpg') /*Vai atribuir o profile-dark ao src*/
  }
}