const observer = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
         entry.target.classList.remove('show');
    
        }
    
    });
    
});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe (el));



  function zoomIn() {
    var gambar = document.getElementById("gambar");
    gambar.classList.toggle("scale-500");
  }
