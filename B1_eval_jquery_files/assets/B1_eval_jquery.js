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

// Pour agrandir l'élément square
function expand(){
        $(`#scaleUp`).on(`click`, function(){
            $(`.fa-square`).css({ 'widht' : '+=20px', 
            'height' : '+=20px'})
    })
}

// Pour rétrécir l'élément square
function down(){
    $(`#scaleDown`).on(`click`, function(){
        $(`.fa-square`).css({'widht' : '-=20px', 
        'height' : '-=20px'})
    })
}

// Pour former un cercle
function circle(){
    $(`#shapeCircle`).on(`click`, function(){
        $(`.fa-square`).css('border-radius', '50px')
    })
}

$(function(){


    experiment() 
    expand()
    down()
    circle()






})
