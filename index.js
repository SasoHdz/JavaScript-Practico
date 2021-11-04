
    let cards = [
        document.getElementById('container1') ,
        document.getElementById('container2') ,
        document.getElementById('container3') ,
        document.getElementById('container4') ,
    ];

    let imgs = [
        document.getElementById('img1') ,
        document.getElementById('img2') ,
        document.getElementById('img3') ,
        document.getElementById('img4') ,
    ];


function colorNoSelect (cardSelecta, imgSelecta) {
        cards.forEach(
            function (card) {
                if(card.id != cardSelecta) {
                    card.classList.add('noSelecto');
                }
                else 
                {
                    card.classList.add
                }
            });
    
            imgs.forEach(
                function (img) {
                    if(img.id != imgSelecta) {
                        img.classList.add('invertir');
                    }
                    else 
                    {
                        img.classList.add
                    }
                });        
}



function desSelect () {
    cards.forEach( 
        function (card) {
            card.classList.remove('noSelecto');
        }
        );
    
    imgs.forEach( 
            function (img) {
                img.classList.remove('invertir');
            }
            );    
}