const $notesView = document.querySelector('[data-notes="view"]');
const $titleNotes = document.querySelector('[data-title="title"]');

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
    if (localNotes.length <= 0){
        $titleNotes.innerHTML = `Ops!nenhuma nota criada`;
    } else {
        $titleNotes.innerHTML = `Notas criadas`;
    }

    localNotes.forEach((note, index) => {
        $notesView.innerHTML += createHtmlView(note, index);
    });
}

export default initializeViewNotes;
