const draggableElement = document.querySelectorAll('.draggable');
const droppableElement = document.querySelectorAll('.drop_Box');
let totalScore = 0;
const initialPositions = {};

draggableElement.forEach(element=>{
    element.addEventListener('dragstart', drgStartEvent=>{
        drgStartEvent.dataTransfer.setData('text', drgStartEvent.target.id);
        drgStartEvent.currentTarget.classList.add('draggable_Format');
    });
});

draggableElement.forEach(element=>{
    element.addEventListener('dragend', drgEndEvent=>{
        drgEndEvent.currentTarget.classList.remove('draggable_Format');
    });
});

droppableElement.forEach(element=>{
    element.addEventListener('drop', dropEvent=>{
        dropEvent.preventDefault();
        const droppedElementId = dropEvent.dataTransfer.getData('text');
        const dropZoneId = dropEvent.target.getAttribute('data-draggable-id');
        const draggableElement = document.getElementById(droppedElementId);
        const dropZoneCss = event.target;
        
        dropEvent.target.appendChild(document.getElementById(droppedElementId));
        if(dropZoneId === droppedElementId){
            draggableElement.draggable = false;
            draggableElement.style.cursor = 'no-drop';

            dropZoneCss.style.border = 'none';

            draggableElement.classList.add('dropped_Element');
            
            document.getElementById('total_Score').innerText = totalScore;
            totalScore += 1;
        }
    });
    element.addEventListener('dragover', drgOverEvent=>{
        drgOverEvent.preventDefault();
    }); 
});

draggableElement.forEach(element => {
    const rect = element.getBoundingClientRect();
    initialPositions[element.id] = { left: rect.left, top: rect.top };
});

function restartGame() {
    location.reload();
}