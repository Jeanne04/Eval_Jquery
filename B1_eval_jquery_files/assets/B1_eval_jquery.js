function experiment(){
    $(`#toggleRedSquare`).on(`click`, function(){

        // Pour activer et désactiver le bouton
        $(`.redsquare-app`).toggleClass(`is-active`)

        // // Pour ajouter et supprimer l'attribut disabled
        $(`.redsquare-controls`).attr(`.disabled`).removeAttr(`disabled`)

        // Permuter les deux classes
        $(`.btn-light`).toggleClass(`.btn-primary`)

    })
}

function expand(){
        // $(`#scaleUp`).on(`click`, function(){

    //     if (){
    //         $(`.)
    //     }
    // })
}

$(function(){

    experiment()





})
