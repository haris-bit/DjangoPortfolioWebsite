console.log("It's working!");

// if doesn't exist, it'll return null
let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; i<themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('Option Clicked:', mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
	if (mode == 'light'){
		document.getElementById('theme-style').href = static = '/default.css'
	}

	if (mode == 'blue'){
		document.getElementById('theme-style').href = static + '/blue.css'
	}

	if (mode == 'green'){
		document.getElementById('theme-style').href = static + '/green.css'
	}

	if (mode == 'purple'){
		document.getElementById('theme-style').href = static + '/purple.css'
	}

    // to set an item in the local storage
    localStorage.setItem('theme', mode);

}