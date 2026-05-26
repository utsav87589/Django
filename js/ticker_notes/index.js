function takeNotes(){
    const ticker = document.getElementById('input-ticker').value;
    const notes = document.getElementById('input-notes').value;

    console.log(`ticker is  : ${ticker}`);
    console.log(`notes are  : ${notes}`);

    let newCard = document.createElement('div');
    newCard.className = 'card';

    newCard.innerHTML = `<h3>${ticker}</h3><br><p>${notes}</p>`

    const container = document.getElementById('notes-list');
    container.appendChild(newCard);

    document.getElementById('input-ticker').value = '';
    document.getElementById('input-notes').value = '';

}
