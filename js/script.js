var isVisible = true;

function collapse() {
    switch (isVisible) {
        case true:
            document.getElementById('nav-ul').style.height = '100vh'
            document.getElementById('nav-ul').style.paddingTop = '100px'
            document.getElementById('nav-ul').classList.add('anim-fade');
            document.getElementById('nav-ul').classList.add('apear');
            document.getElementById('nav-ul').classList.remove('hide');
            isVisible = false;
            break;
        case false:
                isVisible = true;
                document.getElementById('nav-ul').style.height = '0px'
                document.getElementById('nav-ul').style.paddingTop = '0px'
                document.getElementById('nav-ul').classList.add('hide');
                document.getElementById('nav-ul').classList.remove('apear');
                document.getElementById('nav-ul').classList.remove('anim-fade')
        break;
    
        default:
            break;
    }
}