
let container = document.createElement("div");
container.style.backgroundColor = "#94AAD6";
container.style.width = "750px";
container.style.height = "750px";
document.body.appendChild(container);

let cover01 = document.createElement("div");
cover01.style.backgroundColor = "gray";
cover01.style.width = "100px";
cover01.style.height = "100px";
cover01.style.top = "100px";
cover01.style.left = "100px";
container.appendChild(cover01);

function createLabel(index){
    let label = document.createElement("div");
    label.innerText = index;
    label.style.position = "absolute";
    label.style.top = "35px";
    label.style.left = "50px";
    label.style.fontSize = "30px";
    return label;
}

let label01 = createLabel(1);
cover01.appendChild(label01);




let pics=new Array();
for(i=0;i<=8;i++){
pics[i]=new Image(); 
pics[i].src='image'+i+'.gif';
}

let map=new Array(1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8)
let user=new Array();
let temparray=new Array();
let clickarray=new Array(0,0);
let ticker, sec, min, ctr, id=0, oktoclick, finished;

function init(){
clearTimeout(id);
for(i=0;i<=15;i++)user[i]=0;
ticker=0; min=0; sec=0; ctr=0; finished=0;
oktoclick=true;
document.forms["f"].b.value="Resetting game table...";
scramble();
id=setInterval('runclk()', 995);
for(i=0;i<=15;i++){
document.images[('img'+i)].src="image0.gif";
document.images[('img'+i)].alt="";
}}

function runclk(){
min=Math.floor(ticker/60);
sec=(ticker-(min*60))+'';
if(sec.length==1){sec="0"+sec};
ticker++;
document.forms["f"].b.value="    "+min+":"+sec+"    ";
}

function scramble(){
for(z=0;z<5;z++){
for(x=0;x<=15;x++){
temparray[0]=Math.floor(Math.random()*16);
temparray[1]=map[temparray[0]];
temparray[2]=map[x];
map[x]=temparray[1];
map[temparray[0]]=temparray[2];
}}}

function showimage(but){
if(oktoclick){
oktoclick=false; 
document.images[('img'+but)].src='image'+map[but]+'.gif';
document.images[('img'+but)].alt='Image '+map[but];
if(ctr==0){
ctr++;
clickarray[0]=but;
oktoclick=true;
}else{
clickarray[1]=but;
ctr=0;
setTimeout('returntoold()', 600);
}}}

function returntoold(){
if((clickarray[0]==clickarray[1])&&(!user[clickarray[0]])){
document.images[('img'+clickarray[0])].src="image0.gif";
document.images[('img'+clickarray[0])].alt="";
oktoclick=true;
}else{
if(map[clickarray[0]]!=map[clickarray[1]]){
if(user[clickarray[0]]==0){
document.images[('img'+clickarray[0])].src="image0.gif";
document.images[('img'+clickarray[0])].alt="";
}
if(user[clickarray[1]]==0){
document.images[('img'+clickarray[1])].src="image0.gif";
document.images[('img'+clickarray[1])].alt="";
}}
if(map[clickarray[0]]==map[clickarray[1]]){
if(user[clickarray[0]]==0&&user[clickarray[1]]==0)finished++;
user[clickarray[0]]=1;
user[clickarray[1]]=1;
}
if(finished>=8){
alert('You did it in '+document.forms["f"].b.value+' !');
init();
}else{
oktoclick=true;
}}}

let t='<table cellpadding="0" cellspacing="0" border="0">';
for(r=0;r<=3;r++){
t+='<tr>';
for(c=0;c<=3;c++)t+='<td align="center"><a href="javascript:showimage('+((4*r)+c)+')" onClick="this.blur()"><img src="image0.gif" name="img'+((4*r)+c)+'" alt="" border="0"></a></td>';
t+='</tr>';
}
t+='</table><br><br><form name="f"><input type="button" value="Downloading images...." name="b" onClick="init()"></form>';
document.write(t);

window.onload=init;



