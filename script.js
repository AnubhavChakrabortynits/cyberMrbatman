/*disco light animation starts*/

const discolight=document.getElementById("blinklights")

discolight.addEventListener("click",()=>{
   
    const colorarray=['linear-gradient(-45deg,yellow, white)',' linear-gradient(-45deg,#ff007e, #bfdd04)','linear-gradient(-45deg,#7600ff, #42ec62)','linear-gradient(-45deg,rgb(0 255 212), rgb(4 5 9))','linear-gradient(-45deg,rgb(8 8 8), rgb(198 205 232))','linear-gradient(-45deg,rgb(245 4 4), rgb(7 9 16))','linear-gradient(-45deg,rgb(226 4 245), rgb(7, 9, 16))','linear-gradient(-45deg,rgb(226, 4, 245), rgb(255 204 0))','linear-gradient(-45deg,rgb(4 11 245), rgb(249 28 164))','linear-gradient(-45deg,rgb(239 239 242), rgb(4 4 4))','linear-gradient(-45deg,blue,violet,blue)','linear-gradient(-45deg,yellow, white)',' linear-gradient(-45deg,#ff007e, #bfdd04)','linear-gradient(-45deg,#7600ff, #42ec62)','linear-gradient(-45deg,rgb(0 255 212), rgb(4 5 9))','linear-gradient(-45deg,rgb(8 8 8), rgb(198 205 232))','linear-gradient(-45deg,rgb(245 4 4), rgb(7 9 16))','linear-gradient(-45deg,rgb(226 4 245), rgb(7, 9, 16))','linear-gradient(rgb(226, 4, 245), rgb(255 204 0))','linear-gradient(-45degrgb(4 11 245), rgb(249 28 164))','linear-gradient(-45degrgb(239 239 242), rgb(4 4 4))','linear-gradient(blue,violet,blue)','linear-gradient(-45deg,yellow, white)',' linear-gradient(-45deg,#ff007e, #bfdd04)','linear-gradient(-45deg,#7600ff, #42ec62)','linear-gradient(rgb(0 255 212), rgb(4 5 9))','linear-gradient(-45deg,rgb(8 8 8), rgb(198 205 232))','linear-gradient(-45deg,rgb(245 4 4), rgb(7 9 16))','linear-gradient(rgb(226 4 245), rgb(7, 9, 16))','linear-gradient(rgb(226, 4, 245), rgb(255 204 0))','linear-gradient(rgb(4 11 245), rgb(249 28 164))','linear-gradient(-45deg,rgb(239 239 242), rgb(4 4 4))','linear-gradient(blue,violet,blue)','linear-gradient(yellow, white)',' linear-gradient(-45deg,#ff007e, #bfdd04)','linear-gradient(#7600ff, #42ec62)','linear-gradient(-45deg,rgb(0 255 212), rgb(4 5 9))','linear-gradient(rgb(8 8 8), rgb(198 205 232))','linear-gradient(rgb(245 4 4), rgb(7 9 16))','linear-gradient(rgb(226 4 245), rgb(7, 9, 16))','linear-gradient(rgb(226, 4, 245), rgb(255 204 0))','linear-gradient(rgb(4 11 245), rgb(249 28 164))','linear-gradient(rgb(239 239 242), rgb(4 4 4))','linear-gradient(blue,violet,blue)','linear-gradient(yellow, white)',' linear-gradient(#ff007e, #bfdd04)','linear-gradient(#7600ff, #42ec62)','linear-gradient(-45deg,rgb(0 255 212), rgb(4 5 9))','linear-gradient(rgb(8 8 8), rgb(198 205 232))','linear-gradient(rgb(245 4 4), rgb(7 9 16))','linear-gradient(rgb(226 4 245), rgb(7, 9, 16))','linear-gradient(rgb(226, 4, 245), rgb(255 204 0))','linear-gradient(rgb(4 11 245), rgb(249 28 164))','linear-gradient(rgb(239 239 242), rgb(4 4 4))','linear-gradient(blue,violet,blue)','linear-gradient(yellow, white)',' linear-gradient(#ff007e, #bfdd04)','linear-gradient(,-45deg#7600ff, #42ec62)','linear-gradient(rgb(0 255 212), rgb(4 5 9))','linear-gradient(rgb(8 8 8), rgb(198 205 232))','linear-gradient(rgb(245 4 4), rgb(7 9 16))','linear-gradient(rgb(226 4 245), rgb(7, 9, 16))','linear-gradient(rgb(226, 4, 245), rgb(255 204 0))','linear-gradient(rgb(4 11 245), rgb(249 28 164))','linear-gradient(-45degrgb(239 239 242), rgb(4 4 4))','linear-gradient(blue,violet,blue)','linear-gradient(rgb(4 11 245), rgb(249 28 164))','linear-gradient(-45deg,rgb(239 239 242), rgb(4 4 4))','linear-gradient(blue,violet,blue)']
  var audio=new Audio('The 90s.mp3')
  audio.play()

 const eyes= document.getElementsByClassName('eye');
 const teethcont1=document.getElementById('teethcont1')
 const teethcont2=document.getElementById('teethcont2')
 document.getElementById("eye1").style.animation="no"
 document.getElementById("eye2").style.animation="no"
 const hand1=document.getElementById('bathand1')
 const hand2=document.getElementById('bathand2')
 const batbody=document.getElementById('body')
 const cap1=document.getElementById('cap1')
 const cap2=document.getElementById('cap2')
 const calf1=document.getElementById('calf1')
 const calf2=document.getElementById('calf2')
 const shoe1=document.getElementById('shoe1')
 const shoe2=document.getElementById('shoe2')


 
  for(let i=0;i<eyes.length;i++){
    eyes[i].style.backgroundColor='red'
    eyes[i].style.boxShadow='2px 2px 4px yellow,-2px -2px 4px yellow'
      }
   
   teethcont1.style.animation='teeth1 1s  0s infinite alternate'     
   teethcont2.style.animation='teeth2 1s  0s infinite alternate'   
   hand1.style.animation='hand1 6s  0s infinite alternate'
   hand2.style.animation='hand2 6s  0s infinite alternate'
   batbody.style.animation='botbody 2s  0s infinite alternate'
   cap1.style.animation='cap1 2s  0s infinite alternate'
   cap2.style.animation='cap2 2s  0s infinite alternate'
   calf1.style.animation='calf1 6s  0s infinite alternate'
   calf2.style.animation='calf2 6s  0s infinite alternate'
   shoe1.style.animation='shoe1 6s  0s infinite alternate'
   shoe2.style.animation='shoe2 6s  0s infinite alternate'

  for(let i=0;i<colorarray.length;i++){
    setTimeout(()=>{
        document.getElementById('container').style.backgroundImage=colorarray[i]
        if(i==colorarray.length-1){
            for(let i=0;i<eyes.length;i++){
                eyes[i].style.backgroundColor='white'
                document.getElementById("eye1").style.animation="eyeanimate 3s ease-in 1s infinite alternate"
                document.getElementById("eye2").style.animation="eyeanimate 3s ease-in 1s infinite alternate"
               
               teethcont1.style.animation="no"
               teethcont2.style.animation="no"
               hand1.style.animation="no"
               hand2.style.animation="no"
               batbody.style.animation='no'
               cap1.style.animation='cap1idle 6s ease-in-out 1s infinite alternate'
               cap2.style.animation='cap2idle 6s ease-in-out 1s infinite alternate'
               calf1.style.animation='no'
               calf2.style.animation='no'
               shoe1.style.animation='no'
               shoe2.style.animation='no'
                  }
        }
    },1000*(0.1*i))
    
   }
 
})
/*disco light animation ends*/


/*crazy function starts */

const crazy=document.getElementById('crazy')
crazy.addEventListener('click',()=>{
  iscrazy=true;
  const capcont=document.getElementById('capcont')
  const earcont=document.getElementById('earcont')
  const headcont=document.getElementById('head')
  const neckcont=document.getElementById('neckcont')
  const body=document.getElementById('body')
  const handcont=document.getElementById('handcont')
  const thighcont=document.getElementById('thighcont')
  const calfcont=document.getElementById('calfcont')
  const shoecont=document.getElementById('shoecont');
  const elearray=[capcont,earcont,headcont,neckcont,body,thighcont,handcont,calfcont,shoecont]


 setTimeout(()=>{
  var audio=new Audio('backgroundsound.wav')
  audio.play()
  for(let i=0;i<elearray.length;i++){
    elearray[i].style.animation='crazy 4s ease-in-out 1s infinite alternate'
  }
 }) 

 setTimeout(()=>{
  for(let i=0;i<elearray.length;i++){
    elearray[i].style.animation='no'
  }
 },4000)
  
})

/*crazy function ends*/







/*disappear function starts */
const disappear=document.getElementById('disappear')
disappear.addEventListener('click',()=>{
document.getElementById('container').style.backgroundColor='black'

})


/*disapper function ends */