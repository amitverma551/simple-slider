!function(){
    
   var slider = document.getElementById("slider");
   var slide = document.getElementsByClassName("item");
   var outerEl = document.querySelector(".slider-stage");
   var mrgin = 10;
   var itemWidth = slider.clientWidth / 4; 
   var outerwidth = itemWidth * slide.length;
    
    console.dir(slider.clientWidth);
    outerEl.style.width = outerwidth + "px";
    outerEl.style.transition = "all 0.25s ease 0s";
    
    Array.prototype.forEach.call(slide, item => {
        console.log(item.style.width);
        item.style.width = itemWidth + 'px';
        item.style.marginRight = mrgin + 'px';
    });
    
    var counter = 1;
    function nextSlide(){        
        var nextBtn = document.querySelector(".slider-next");
        nextBtn.addEventListener('click', function(){
          console.log(counter);
          outerEl.style.transform = 'translate3d('+ itemWidth * -counter +'px, 0px, 0px)';
          counter++;
        })
    }
    
    
    function prevSlide(){
        var nextBtn = document.querySelector(".slider-prev");
        nextBtn.addEventListener('click', function(){
          console.log(counter);
          outerEl.style.transform = 'translate3d('+ itemWidth * counter +'px, 0px, 0px)';
          counter--;
        })
    }
    
    nextSlide();
    prevSlide();
    
   
    
}();