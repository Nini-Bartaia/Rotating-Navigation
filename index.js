
const image=document.getElementsByClassName('image')[0]
const img2= document.getElementsByClassName('img2')[0]
const article=document.getElementsByTagName('article')[0]
const header= document.getElementsByTagName('h1')[0]



image.addEventListener('click', ()=>{
    if(img2.style='display:none'){
        image.replaceWith(img2)
        img2.style='display: block'
        article.style='-webkit-transform: rotate(-25deg)'
        article.classList='article'
        document.body.style.background='#2b2a2a'


    }
    
})

img2.addEventListener('click', ()=>{
    if(img2.style='display:block'){
        img2.replaceWith(image)
        image.classList='image'
        article.style='-webkit-transform: none'
        document.body.style.background='#dbd4d4'
        header.style.marginTop='20%'
        
       // article.classList.remove('article')
        
    }
})
