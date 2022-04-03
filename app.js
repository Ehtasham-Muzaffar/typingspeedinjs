var text=document.getElementById("Msg")
var btn=document.getElementById("btn")
var textmsg=document.getElementById("text")
var starttime,endtime
var log=console.log
const playgame=()=>{
  let date = new Date()
  starttime = date.getTime() 
    var array_line=Math.floor(Math.random()* setofwords.length)
    text.innerText=setofwords[array_line]
    btn.innerText="Done"

}

const wordcounter = (str)=>{
    let response = str.split(" ").length
    return response
}
const endgame=()=>{
let date=new Date()
endtime= date.getTime()
totaltime=(endtime-starttime)/1000
let totalstr= textmsg.value
log(totalstr)
let wordcount = wordcounter(totalstr)
log(wordcount)
let speed= Math.floor( (wordcount/totaltime)*60)
log(speed)

let compare=comparestring(text.innerText,totalstr,speed)

}
const comparestring =(str1,str2,speed)=>{
    let cnt=0
let word1=str1.split(" ")
let word2=str2.split(" ")
word1.forEach( (item,index)=> {
    if(item==word2[index])
    cnt++;
});
let errormsg=(word2.length-cnt)
text.innerText=`${cnt} word is match in ${word1.length} and your total error is 
${errormsg} your wps is ${speed}`
}

var setofwords=["hello shami how are you are you ok with your friend",
"hello i am working on a javacript and i am full working on it i hope i work very hard on it",
"i am alwayas thinking about you are my soul mate and life partner"]
btn.addEventListener("click",function(){

if(this.innerText == "Start"){
    textmsg.disabled= false
    playgame()
    
}else if(this.innerText=="Done"){
    this.innerText="Start"
    textmsg.disabled=true
    endgame()

}
    
})