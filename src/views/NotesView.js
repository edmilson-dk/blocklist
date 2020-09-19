const $notesView = document.querySelector('[data-notes="view"]');
const $notesRemove = document.querySelector('[data-notes="remove"]');

function taskesNotesStoredInLocalStorage(){
    const localNotes = window.localStorage.getItem('notes');
    const notes = JSON.parse(localNotes);

    return notes;
}

function createHtmlView(noteItem, index){
    return `
        <div class="notes__item" id=${index}>
            <article class="notes__priority" style="background: ${noteItem.priority}"></article>
            <h3>${noteItem.title}</h3>
            <div class="notes__item-content">
                <p>${noteItem.content}</p>
            </div>
            <div class="notes__item-button">
                <button onclick="removeNote()" >Remover</button>
            </div>
        </div>
        `
}

function initializeViewNotes(){

    const localNotes = taskesNotesStoredInLocalStorage();
    
    localNotes.forEach((note, index) => {
        $notesView.innerHTML += createHtmlView(note, index);
    });
}

export default initializeViewNotes;
