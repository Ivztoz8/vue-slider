var example1 = new Vue({
    el: '#root',
    data: {
        photos: [
               'https://source.unsplash.com/random/800x500/?scifi',
               'https://source.unsplash.com/random/800x500/?dog',
               'https://source.unsplash.com/random/800x500/?cat',
               'https://source.unsplash.com/random/800x500/?fantasy',
            ],
        counterPhoto: 0, 
        },
        created(){
            this.timerNextPhoto();
        },
    methods:{
        prevP: function(){
            this.counterPhoto -= 1;
            if(this.counterPhoto < 0){
                this.counterPhoto = this.photos.lenght -1;
            }
        },
        nextP: function(){
            this.counterPhoto += 1;
            if(this.counterPhoto > (this.photos.lenght -1)){
                this.counterPhoto = 0;
            }
        },
        timerNextPhoto: function(){
            setInterval(() => {
                this.nextP();
            }, 3000);
        },
        clickD: function(indexPic){
            console.log(indexPic );
            this.counterPhoto = indexPic;
        }
    }
  }
)