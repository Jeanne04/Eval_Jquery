// Première Partie
function experiment(){
    // au click sur le bouton :
    $(`#toggleRedSquare`).on(`click`, function(){

        // Pour activer et désactiver le bouton
        $(`.redsquare-app`).toggleClass(`is-active`)

        // // Pour ajouter et supprimer l'attribut disabled
        $(`.redsquare-controls`).removeAttr(`disabled`)

        // Permuter les deux classes
        $(`.btn-light`).toggleClass(`.btn-primary`)

        expand();
        down();
        circle();
        square();
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
        console.log('#shapeCircle');
        $(`.fa-square`).css('border-radius', '50px')
    })
}

// Pour faire un carré
function square(){
    $(`#shapeSquare`).on(`click`, function(){
        $(`.fa-square`).css({'widht' : '40px', 
        'height' : '40px'})
    })
}

// Deuxième Partie

function jumbotron(){

    $('.jumbotron').on('click', function(){
        $('a').empty('href');
        $('ul').addClass('.list-group');
        $('li').addClass('.list-group-item');
    })
}


$(function(){


    experiment() 

    jumbotron()





})
