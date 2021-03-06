// Descrizione:
// Partendo dal markup consegnate rendere dinamici tutti i contenuti (foto e testi) e al click su una thumb, visualizzare in grande l’immagine corrispondente



// Bonus:
// 1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

const app = new Vue({

    el: '#app',

    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],

        counterPhoto: 0,
       
    },

    autoScroll: null,
    
    methods: {
        nextPhoto(){
            this.counterPhoto++
            if(this.counterPhoto > this.slides.length - 1){
                this.counterPhoto = 0;
            }
        },
        previousPhoto(){
            this.counterPhoto--
            if(this.counterPhoto < 0){
                this.counterPhoto = this.slides.length - 1;
            }
        },

        // changeSlide(index){
        //     this.counterPhoto = index
        // }

        
        
        mouseOver(){
            clearInterval(this.autoScroll);
            this.autoScroll = null;
        },
        
        mouseOut(){ 
            this.startAutoScroll();      
        },
        
        startAutoScroll(){
            this.autoScroll = setInterval(() => {
                this.nextPhoto();
            },1000)        
        }
    },

    mounted(){
        this.startAutoScroll();
    }

});

    






