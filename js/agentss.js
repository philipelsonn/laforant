window.onload = () => {
    $('#agent1').css({
        display: "none"
    });

    let delay = 1000;
    
    let agent1Count = $('.agent1').length;
    let agent1width = $('.agent1').width();
    let agent1Height = $('.agent1').height();
    let totalWidth = agent1Count * agent1width;
    
    let currentLeft = 0;

    $('#agent1-container').css({
        width: totalWidth
    })
    
    $('#slider1').css({
        width: agent1width,
        height: agent1Height
    })

    $('#laquo').click(() => {
        console.log($('.agent1'))
        currentLeft += agent1width;
        if(currentLeft == agent1width) currentLeft = -totalWidth + agent1width;
        $('#agent1-container').animate({
            left: currentLeft
        }, delay, () => {

        }); 
    }); 
    
    $('#raquo').click(() => {
        currentLeft -= agent1width; 
        if(currentLeft == -totalWidth) currentLeft = 0;
        $('#agent1-container').animate({
            left: currentLeft
        }, delay, () => { 

        });
    });

    $('#agent2').css({
        display: "none"
    });
    
    let agent2Count = $('.agent1').length;
    let agent2width = $('.agent1').width();
    let agent2Height = $('.agent1').height();
    let totalWidth2 = agent2Count * agent2width;

    $('#agent2-container').css({
        width: totalWidth2
    })
    
    $('#slider2').css({
        width: agent2width,
        height: agent2Height
    })

    $('#laquo2').click(() => {
        currentLeft += agent2width;
        if(currentLeft == agent2width) currentLeft = -totalWidth2 + agent2width;
        $('#agent2-container').animate({
            left: currentLeft
        }, delay, () => {

        }); 
    }); 
    
    $('#raquo2').click(() => {
        currentLeft -= agent2width; 
        if(currentLeft == -totalWidth2) currentLeft = 0;
        $('#agent2-container').animate({
            left: currentLeft
        }, delay, () => { 

        });
    });

    let agent3Count = $('.agent1').length;
    let agent3width = $('.agent1').width();
    let agent3Height = $('.agent1').height();
    let totalWidth3 = agent3Count * agent3width;

    $('#agent3-container').css({
        width: totalWidth3
    })
    
    $('#slider3').css({
        width: agent3width,
        height: agent3Height
    })

    $('#laquo3').click(() => {
        currentLeft += agent3width;
        if(currentLeft == agent3width) currentLeft = -totalWidth3 + agent3width;
        $('#agent3-container').animate({
            left: currentLeft
        }, delay, () => {

        }); 
    }); 
    
    $('#raquo3').click(() => {
        currentLeft -= agent3width; 
        if(currentLeft == -totalWidth3) currentLeft = 0;
        $('#agent3-container').animate({
            left: currentLeft
        }, delay, () => { 

        });
    });
    
    let agent4Count = $('.agent1').length;
    let agent4width = $('.agent1').width();
    let agent4Height = $('.agent1').height();
    let totalWidth4 = agent4Count * agent4width;

    $('#agent4-container').css({
        width: totalWidth4
    })
    
    $('#slider4').css({
        width: agent4width,
        height: agent4Height
    })

    $('#laquo4').click(() => {
        currentLeft += agent4width;
        if(currentLeft == agent4width) currentLeft = -totalWidth4 + agent4width;
        $('#agent4-container').animate({
            left: currentLeft
        }, delay, () => {

        }); 
    }); 
    
    $('#raquo4').click(() => {
        currentLeft -= agent4width; 
        if(currentLeft == -totalWidth4) currentLeft = 0;
        $('#agent4-container').animate({
            left: currentLeft
        }, delay, () => { 

        });
    });

    let agent5Count = $('.agent1').length;
    let agent5width = $('.agent1').width();
    let agent5Height = $('.agent1').height();
    let totalWidth5 = agent5Count * agent5width;

    $('#agent5-container').css({
        width: totalWidth5
    })
    
    $('#slider5').css({
        width: agent5width,
        height: agent5Height
    })

    $('#laquo5').click(() => {
        currentLeft += agent5width;
        if(currentLeft == agent5width) currentLeft = -totalWidth5 + agent5width;
        $('#agent5-container').animate({
            left: currentLeft
        }, delay, () => {

        }); 
    }); 
    
    $('#raquo5').click(() => {
        currentLeft -= agent5width; 
        if(currentLeft == -totalWidth5) currentLeft = 0;
        $('#agent5-container').animate({
            left: currentLeft
        }, delay, () => { 

        });
    });
}