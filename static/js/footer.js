window.onload = function(){
  let footer = document.getElementById('footer')
  let beianTitle = document.createElement('span')
  let beianLink = document.createElement('a')
  let author = document.createElement('span')
  beianTitle.textContent = '备案号：'
  beianLink.textContent = '豫ICP备18032023号'
  beianLink.setAttribute("href", "http://www.beian.gov.cn");
  author.textContent = '作者：aioverg'
  footer.appendChild(beianTitle)
  footer.appendChild(beianLink)
  footer.appendChild(author)
  console.log('00000000000000', footer)
}