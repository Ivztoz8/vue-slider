var app = new Vue (
    {
        el:'#root',
        data: {
            toslide:[
                'https://source.unsplash.com/random/400x400/?scifi',
                'https://source.unsplash.com/random/400x400/?space',
                'https://source.unsplash.com/random/400x400/?planet',
                'https://source.unsplash.com/random/400x400/?abyss',
            ],
            counter: 0,
        },
        created(){
            this.sliderTimer()
        },
        methods: {
            slideNext: function(){
                this.counter += 1;
                if (this.counter > (this.toslide.length -1)){
                    this.counter = 0;
                }
            },
            slidePrev: function(){
                this.counter -= 1;
                if (this.counter < 0){
                    this.counter = (this.toslide.length -1);
                }
            },
            sliderTimer: function(){
                setInterval(() =>{
                    this.slideNext();
                }, 3000);
            },
            clickDot: function(indexDot){
                this.counter = indexDot;
            }
        }
    }
)