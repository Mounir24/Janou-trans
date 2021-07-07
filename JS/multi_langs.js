// MULTI LANGUAGES SART -- CREATING A CLASS 
const ele_languages = {
    eng: {
        title: 'Welcome To Janou Transport Company',
        desc: 'We are honored to help you grow your business.',
        btn: 'Contact Us'
    },
    esp: {
        title: 'Bienvenido a Janou Transport Company',
        desc: 'Nos sentimos honrados de ayudarlo a hacer crecer su negocio.',
        btn: 'Contacta con nosotras'
    },
    fra: {
        title: 'Bienvenue à la société de transport Janou',
        desc: 'Nous sommes honorés de vous aider à développer votre entreprise.',
        btn: 'Nous contacter'
    }
}

class Translate {
    constructor() {
        document.getElementById('eng').addEventListener('click', () => {
            alert('Btn Clicked!');
            this.translate_lng('english');
        })
        document.getElementById('esp').addEventListener('click', () => {
            alert('Btn Clicked!');
            this.translate_lng('espain');
        })

        document.getElementById('fr').addEventListener('click', () => {
            alert('Btn Clicked!');
            this.translate_lng('francais');
        })

        this.translate_lng(localStorage.getItem('language'));
    }
    // METHODS

    translate_lng(language) {
        // CHECK IF THE LANGUAGE (AR - FR - ES)
        if(language == 'english') {
            document.getElementById('show-case-title').innerText = ele_languages.eng.title;
            document.getElementById('show-case-desc').innerText = ele_languages.eng.desc;
            document.getElementById('show-case-btn').innerText = ele_languages.eng.btn;
        } else if (language == 'espain') {
            document.getElementById('show-case-title').innerText = ele_languages.esp.title;
            document.getElementById('show-case-desc').innerText = ele_languages.esp.desc;
            document.getElementById('show-case-btn').innerText = ele_languages.esp.btn;
        } else if (language == 'francais') {
            document.getElementById('show-case-title').innerText = ele_languages.fra.title;
            document.getElementById('show-case-desc').innerText = ele_languages.fra.desc;
            document.getElementById('show-case-btn').innerText = ele_languages.fra.btn;
        }

        localStorage.setItem('language', language);
    }
}


onload = new Translate();