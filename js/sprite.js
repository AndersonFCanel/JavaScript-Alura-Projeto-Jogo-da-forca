/**
 * createSprite(). Ela receberá o seletor do elemento que exibirá os frames do nosso sprite. 
 Inclusive, já vamos buscar o elemento e guardar na variáve $el. 
 Alguns programadores utilizam o prefixo $ para indicar que a variável guarda um jQuery Object, 
 padrão que utilizarei:
 */

function createSprite(selector) {
    var $el = $(selector);   
    /**
     *  Ele precisará verificar se ainda há o próximo frame. Havendo, mudamos para o próximo frame, caso contrário, ficamos no frame atual, no caso, o último frame do sprite que apresenta a forca completa.
     */
     function hasNext() {
        return current + 1 <= last;
    }

     function moveFrame (from, to) {
        $el.removeClass(from)
            .addClass(to);
    }

     /**
      * Agora, vamos definir a função nextFrame(), aquela que ao ser chamada mudará o estado de current para o próximo frame disponível. Não basta ele adicionar a classe do próximo frame, ele precisa também remover a classe anterior:
      */
    /*function nextFrame() {
        $el.removeClass(frames[current])
            .addClass(frames[++current]);
    }*/
    // pode ter qualquer frame como origem e qualquer frame como destino!
    function nextFrame() {
        /* 
            Usou o pré-incremento ++current, incrementa current antes de 
            passar para a função moveFrame
        */
        moveFrame(frames[current], frames[++current]);
    }

    // criada com function expression
    var reset = function() {

        moveFrame(frames[current], frames[0])
        current = 0;
    };

    var isFinished = function() {

        return !hasNext();
    };  

    /**
     * Temos o elemento do DOM encapsulado pelo jQuery que precisaremos iteragir e aplicar cada frame do sprite, alias, vamos aproveitar e criar um array que guardará uma string com o nome de cada frame declarado em sprite.css:
     */
     var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    /**
     * É importante sabermos qual é o frame atual, inclusive o útimo frame, pois não podemos exceder a quantidade de frames do array.
     */
    var current = 0;
    var last = frames.length -1;

    /**
     * Quando a função createSprite() for invocada, logo de cara, precisará adicionar a primeira classe que representa um frame em nosso elemento do DOM. Fazemos isso facilmente através do jQuery com o método addClass()
     */
     $el.addClass(frames[current]); 

    
    return {
        nextFrame: nextFrame , reset: reset, isFinished: isFinished 
    };
}


/**
 * Para testar, faremos a mesma coisa no console:

sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.isFinished();
 */
