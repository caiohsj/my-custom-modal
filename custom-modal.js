function showModal(modal) {
    var modalDialog = document.querySelector('div.modal-dialog');
    document.querySelector('div.modal-content .close').addEventListener('click', function() {
        closeModal(modal);
    });
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = 1;
    modalDialog.style.animation = 'showModal 2s';
}

function closeModal(modal) {
    modal.style.display = 'none';
    //console.log(modal);
}