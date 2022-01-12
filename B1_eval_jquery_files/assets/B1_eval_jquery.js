function experiment(){
    // au click sur le bouton :
    $(`#toggleRedSquare`).on(`click`, function(){

        // Pour activer et désactiver le bouton
        $(`.redsquare-app`).toggleClass(`is-active`)

        // // Pour ajouter et supprimer l'attribut disabled
        $(`.redsquare-controls`).removeAttr(`disabled`)

        // Permuter les deux classes
        $(`.btn-light`).toggleClass(`.btn-primary`)

    })
}

function expand(){
        $(`#scaleUp`).on(`click`, function(){
            $(`.fa-square`).css('widht', '+=20px', 'height', '-=20px')
    })
}

$(function(){

    experiment() 
    expand()






})
