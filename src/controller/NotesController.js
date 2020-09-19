import { alertsTheUserIfTheNoteWasAddedOrNot } from './AlertController.js';
import { deletesTheValuesPassedToTheEntryByTheUser } from './InputController.js';

const $notesTitle = document.querySelector('[data-notes="title"]');
const $notesContent = document.querySelector('[data-notes="content"]');
const $notesCounter = document.querySelector('[data-notes="counter"]');
const $notesButton = document.querySelector('[data-notes="button"]');
const $notesForm = document.querySelector('[data-notes="form"]');
const $notesChecks = document.querySelectorAll('input[type="checkbox"]');

const $notesAlert = document.querySelector('[data-notes="alert"]');

let inputCheckedValue = {};
const newNotes = [];

function removeStandardFormEvent(){
    $notesForm.addEventListener('submit', event => {
        event.preventDefault();
    }, false);
}

function takesValueOfNotePriorityInput(){
    $notesChecks.forEach((inputChecked, index) => {
        inputChecked.addEventListener('click', () => {
            $notesChecks.forEach(element => {
                if (element.id !== inputChecked.id){
                    element.checked = false;
                } else {
                    inputChecked.checked = true;
                    inputCheckedValue['value'] = inputChecked.value;
                    inputCheckedValue['index'] = index;
                }
            });
        });
    });   
}

function storeNoteInLocalStorage(notes = []){
    window.localStorage.setItem('notes', JSON.stringify(notes));
    deletesTheValuesPassedToTheEntryByTheUser(
        $notesTitle,
        $notesContent, 
        $notesChecks[inputCheckedValue.index]
    );
}

function takesTheNecessaryValuesOfTheNotes(){
    $notesButton.addEventListener('click', () => {
        if ($notesTitle.value && $notesContent.value && inputCheckedValue){
            newNotes.push({
                title: $notesTitle.value,
                content: $notesContent.value,
                priority: inputCheckedValue.value,
            });
            $notesCounter.innerHTML = newNotes.length; 
            storeNoteInLocalStorage(newNotes)
            alertsTheUserIfTheNoteWasAddedOrNot(true, $notesAlert);
            ;

        } else {
            alertsTheUserIfTheNoteWasAddedOrNot(false, $notesAlert);
        }
    })
}

function initializeBanknoteControlProcess(){
    takesValueOfNotePriorityInput();
    takesTheNecessaryValuesOfTheNotes();
    removeStandardFormEvent();

    window.addEventListener('load', () => {
        const localNotes = window.localStorage.getItem('notes');
        const oldNotes = JSON.parse(localNotes);
        
        oldNotes.forEach(note => {
            newNotes.push(note);
        });

        $notesCounter.innerHTML = newNotes.length;
    });
}

export default initializeBanknoteControlProcess;
