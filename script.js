let isOn = false

function toggle() {
    if(!isOn) {
        isOn = true
        document.querySelector('.bulb-circle-inner').style.backgroundColor = '#fcd628'
        document.querySelector('.bulb-circle').style.boxShadow = '0px -10px 300px 45px #fcd628'
        document.querySelector('.bulb-circle-elipse').style.backgroundColor = '#fcd628'
        document.querySelector('.switch-head-inner1').style.backgroundColor = '#fcd628'
        document.querySelector('.switch-head-inner2').style.backgroundColor = '#fcd628'
        document.querySelector('.switch-head-inner3').style.backgroundColor = '#fcd628'
    }
    else {
        isOn = false
        document.querySelector('.bulb-circle-inner').style.backgroundColor = '#272222'
        document.querySelector('.bulb-circle').style.boxShadow = 'none'
        document.querySelector('.bulb-circle-elipse').style.backgroundColor = '#272222'
        document.querySelector('.switch-head-inner1').style.backgroundColor = '#272222'
        document.querySelector('.switch-head-inner2').style.backgroundColor = '#272222'
        document.querySelector('.switch-head-inner3').style.backgroundColor = '#272222'
    }
}

function animation() {
    document.querySelector('.rope-section2').style.transform = 'translateY(-50px)'
    document.querySelector('.rope-bottom').style.transform = 'translateY(-50px)'
}

document.querySelector('.rope-bottom').addEventListener('click', () => {
    document.querySelector('.rope-section2').style.transform = 'translateY(0)'
    document.querySelector('.rope-bottom').style.transform = 'translateY(0)'
    setTimeout(animation, 400)
    setTimeout(toggle, 200)
})