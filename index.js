let color=document.getElementById('color');
let createbtn=document.getElementById('createbtn');
let list=document.getElementById('list');

createbtn.onclick=()=>{
    let newnote=document.createElement('div');
    newnote.classList.add('note');
    newnote.innerHTML=`
    <span class="close">X</span>
                <textarea placeholder="Write your task here!" id="" rows="10" cols="30"></textarea>`;
    newnote.style.borderColor=color.value;
    list.appendChild(newnote);
}
document.addEventListener('click',(event)=>{
    if(event.target.classList.contains('close')){
        event.target.parentNode.remove();
    }
})
let cursor={
    x:null,
    y:null
}
let note={
    dom:null,
    x:null,
    y:null
}
document.addEventListener('mousedown',(event)=>{
    if(event.target.classList.contains('note')){
        cursor={
            x:event.clientX,
            y:event.clientY
        }
        note={
            dom: event.target,
            x:event.target.getBoundingClientRect().left,
            y:event.target.getBoundingClientRect().top,
        }
    }
})
document.addEventListener('mousemove',(event)=>{
    if(note.dom==null) return;
    let currentcursor={
        x:event.clientX,
        y:event.clientY
    }
    let distance={
        x:currentcursor.x-cursor.x,
        y:currentcursor.y-cursor.y
    }
    note.dom.style.left=(note.x + distance.x)+'px';
    note.dom.style.top=(note.y + distance.y)+'px';
    note.dom.style.cursor='grab';
})
document.addEventListener('mouseup',(event)=>{
    if(note.dom==null)return;
    note.dom.style.cursor='auto';
    note.dom=null;
})
