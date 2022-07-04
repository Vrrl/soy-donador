var currentRoute = 'home'

var routes = [
    'home',
    'campaigns'
]

function navigate(route) {
    
    if(currentRoute == route || !routes.includes(route))
        return

    document.getElementById(currentRoute+'-route').classList.remove('current')
    document.getElementById(route+'-route').classList.add('current')
    
    currentRoute = route

}