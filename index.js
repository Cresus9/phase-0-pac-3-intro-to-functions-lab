let string = 'Hello';
function shout(string){
    return string.toUpperCase();
}
shout('Hello');

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
    return string.toUpperCase();
}

function logWhisper(string){
    console.log(string.toLowerCase());
    return string.toLowerCase();
}

function sayHiToHeadphonedRoommate(string){
    let tellhim ="I can\'t hear you!"
    let respondhim ="yes indeed!"
    if (string === string.toLowerCase()){
        return tellhim
        console.log(tellhim);
    }
    else return respondhim.toUpperCase();
    console.log(respondhim.toUpperCase());
}

function sayHiToHeadphonedRoommate(string){
    let askher= 'Let\'s have dinner together!'
    if (string === askher){
        return 'I would love to!'
        console.log('I would love to!');
    }
}

    