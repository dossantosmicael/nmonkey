(function () {
    const icons = [
      "imagens/icons/imonkey1.png",
      "imagens/icons/imonkey2.png",
      "imagens/icons/imonkey3.png"
    ];
  
    const images = [
      "imagens/img/monkey1.jpg",
      "imagens/img/monkey2.jpg",
      "imagens/img/monkey3.jpg"
    ];
  
    const replaceImages = () => {
      document.querySelectorAll("img").forEach((img) => {
        if (!img.dataset.replaced) {
          const width = img.width;
          const height = img.height;
  
          let randomImage;
          if (width <= 32 && height <= 32) {
            randomImage = icons[Math.floor(Math.random() * icons.length)];
          } else {
            randomImage = images[Math.floor(Math.random() * images.length)];
          }
  
          img.dataset.replaced = true;
          img.style.width = `${width}px`;
          img.style.height = `${height}px`;
          img.src = chrome.runtime.getURL(randomImage);
        }
      });
    };
  
    // Substituir as imagens ao carregar a página e a cada 3 segundos
    replaceImages();
    setInterval(replaceImages, 3000);
  })();
  