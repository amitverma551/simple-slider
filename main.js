!function(){
    
   var slider = document.getElementById("slider");
   var slide = document.getElementsByClassName("item");
   var outerEl = document.querySelector(".slider-stage");
   var mrgin = 10;
   var itemShow = 3;
   var itemWidth = slider.clientWidth / itemShow; 
   var outerwidth = itemWidth * slide.length;
   var isDown = false;
   var startx;
   var scrollLeft;
    
    
    
    outerEl.addEventListener('mousedown', (e) =>{
      isDown = true;
      startx = e.pageX - outerEl.offsetLeft;
      scrollLeft = outerEl.scrollLeft;   
    })
    
    
    outerEl.addEventListener('mouseleave', () =>{
       isDown = false;
    })
    
    
    outerEl.addEventListener('mouseup', () =>{
       isDown = false;
    })
    
    
    outerEl.addEventListener('mousemove', (e) =>{
        
      if(!isDown) return; // stop the function from running;
      e.preventDefault();
      const x = e.pageX - outerEl.offsetLeft;
      const dist = (x - startx) * 2;
      var m = scrollLeft - dist; 
      outerEl.style.transform = 'translate3d('+ m * counter +'px, 0px, 0px)'; 
        console.log(m);
    })  
    
    
    
    
    
    
    
    outerEl.style.width = outerwidth + "px";
    outerEl.style.transition = "all 0.25s ease 0s";
    
    Array.prototype.forEach.call(slide, item => {
        item.style.width = itemWidth + 'px';
        item.style.marginRight = mrgin + 'px';        
        for(var idx=0;idx<itemShow;idx++){
            slide[idx].classList.add('active');
        }
    });
    
    var counter = 0;
    
    function nextSlide(){
        for(var idx=0;idx<slide.length;idx++){
            slide[idx].classList.remove('active');
        }        
        if(Math.abs(counter) != slide.length - itemShow){
          counter -= 1;    
          console.log(counter);
          outerEl.style.transform = 'translate3d('+ itemWidth * counter +'px, 0px, 0px)';
        }
         for(var idx=(counter * -1);idx<(itemShow + (counter * -1));idx++){
            slide[idx].classList.add('active');
        }    
    }
    
    function prevSlide(){
        if(counter != 0){
          counter += 1;
          console.log(counter);
          outerEl.style.transform = 'translate3d('+ itemWidth * counter +'px, 0px, 0px)';
        }
    }

    var nextBtn = document.querySelector(".slider-prev");
        nextBtn.addEventListener('click', function(){
           prevSlide() 
        })
    
     var nextBtn = document.querySelector(".slider-next");
        nextBtn.addEventListener('click', function(){
            nextSlide();
        })
      
    
}();