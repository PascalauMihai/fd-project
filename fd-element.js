import {LitElement, html, css} from 'lit';
import { options } from './apikey';


export class FdElement extends LitElement {
  static get styles() {
    return css`

      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
      }
      .selected{
         background-color: #3537cc !important;
         border:2px solid #fff !important;

      }
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');

      *{
        font-family: 'Montserrat', sans-serif;
        margin:0; padding:0;
        box-sizing: border-box;
        outline: none; border:none;
        text-decoration: none;
        text-transform: capitalize;
        transition: all .2s linear;
        font-size: 20px;
        box-sizing:border-box;
      }
      .container{
        padding:25px 10%;
        text-align: center;
        background-color: #c9c9c9d6;
      }

       .container button{
            border:3px solid #000;
            font-size: 20px;
            padding: 12px 15px;
            border-radius: 10px;
            margin-bottom: 10px;
            
      }
      .container .p{
        padding:12px 15px;
        font-size: 20px;
        margin-bottom: 20px;
      }
      .container .heading{
        font-size: 30px;
        padding-bottom: 25px;
      }

      .container #searchBarInput{
        width: 600px;
        border:3px solid #000;
        padding:12px 15px;
        font-size: 20px;
        margin-bottom: 20px;
      }

      .container .image-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap:20px;
        padding-top: 30px;
      }

      .container .image-container .image{
        padding:15px;
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        border:2px solid #000;
        width: 350px;
        border-radius: 5px;
        animation: fadeIn .2s linear;
      }

      @keyframes fadeIn {
        0%{
          transform: scale(.5) translateY(-10px);
          opacity: 0;
        }
      }

      .container .image-container .image img{
        height: 250px;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
      }

      .container .image-container .image h3{
        font-size: 20px;
      }

      @media (max-width:768px){
        .container #searchBarInput{
          width: 100%;
        }
      }

      @media (max-width:450px){

        .container{
          padding:25px 20px;
        }

        .container .image-container .image{
          width: 100%;
        }
      }
      .hidden{
        display: none !important;
      }
      .container .hidden{
        display: none !important;
      }

      .carousel {
	 align-items: center;
	 display: flex;
	 margin: 2rem auto;
	 overflow: hidden;
	 position: relative;
	 width: 600px;
    }
    
    .carousel-images {
        display: flex;
        transform: translateX(0);
        transition: transform 0.25s;
    }

    .carousel-images img {
        border-radius: 5px;
        max-width: 600px;
    }
    
    .carousel-button {
        background: blue;
        border: 0;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        height: 3rem;
        opacity: 0.25;
        position: absolute;
        transition: opacity 0.25s;
        width: 3rem;
        z-index: 1;
    }

    .carousel-button.previous {
        left: 5px;    
    }

    .carousel-button.next { 
        right: 5px;
    }
    
    .carousel-button:hover {
        opacity: 0.8;
    }
    
    .carousel-header {
        font-size: 30px;
        text-align: center;
        margin-top: 40px;
    }

    `;
  }

  constructor() {
    super();
    this.searchTitle = 'Enter your search term';
    this.currentPage = 1;
    this.imagesPerPage = 8;
    this.searchResultData = [];    
    this.searchResultDataHTML = [];
    this.paginationButtonsHidden = true;
    this.slideIndex = 1;
    this.carouselMaxWidthSize = 500;
    this.carouselMaxHeightSize = 500;
    this.carouselSelectedImages = [];
    this.searchedTerm = "";
  }

  static get properties() {
    return {
      searchTitle: {type: String},
      searchResultData: {type: Array},
      searchResultDataHTML: {type: Array},
      currentPage: {type: Number},
      imagesPerPage: {type: Number},
      paginationButtonsHidden: {type: Boolean},
      slideIndex : {type: Number},
      carouselMaxWidthSize : {type: Number},
      carouselMaxHeightSize : {type: Number},
      carouselSelectedImages : {type : Array},
    };
  }
  
  clearResultDataArrays(){
    this.searchResultData = [];
    this.searchResultDataHTML = [];
  }

  async fetchSearchData(searchTerm){
   
    this.clearResultDataArrays();

    return fetch('https://google-image-search1.p.rapidapi.com/v2/?q=' + searchTerm + '&hl=en', options)
    .then(response => response.json())
    .then(responseJson => { return responseJson; })
    .catch(err => console.error(err));
  }

   render() {
    return html`
      <div class="container">
        <h1 class="heading">${this.searchTitle}</h1>
        <input id="searchBarInput" type="text"/>
        <button @click=${this.searchBarInputClick} class="">
            Search
        </button>
        <hr>
        <button @click=${this.selectAllImages} class="hidden" id="selectAllButton"> Select All</button>
        <button @click=${this.deselectAllImages} class="hidden" id="deselectAllButton"> Deselect All</button>
        <hr>
        <button @click=${this.createImageCarousel} class="hidden" id="createCarouselButton"> Create Image Carousel</button>
        <hr>
        <button class="hidden" @click=${this.previousPage} id="previousButton">Previous</button>
        <button class="hidden" @click=${this.nextPage} id="nextButton">Next</button>
        <p class="hidden" id="pageNumberP">Page: <span id="page"></span> / ${this.numberOfPages()}</p> 
        <div id="imageSearchList" class="image-container hidden">
        </div>
       
       </div>
       <hr>
       <h1 class="carousel-header hidden" id="carouselHeaderId">Created Image Carousel for ${this.searchedTerm}</h1>
        <div class="carousel hidden" id="carouselId">
          
          <button class="carousel-button previous" id="previous"><</button>
          <div class="carousel-images" id="carouselImagesId">
             
          </div>
          <button class="carousel-button next" id="next">></button>
      </div>
      

      <!--To be added in case you want to add other items <slot></slot> -->
    `;
  }

  cleanupExistingCarousel(){
    this.carouselSelectedImages = [];
    this.shadowRoot.getElementById("carouselId").classList.add("hidden");
    this.shadowRoot.getElementById("createCarouselButton").classList.add("hidden");
    this.shadowRoot.getElementById("carouselHeaderId").classList.add("hidden");
  }

  async searchBarInputClick() {
    
    if (!this.paginationButtonsHidden){
        this.hideSearchContainerElements();
    }

    this.cleanupExistingCarousel();

    this.searchedTerm = this.shadowRoot.getElementById("searchBarInput").value;
    if(this.searchedTerm.length == 0){
        this.searchedTerm = "empty";
    }
    
    this.searchTitle = "Waiting for search results for " + this.searchedTerm;

    const searchResultDataJson = await this.fetchSearchData(this.searchedTerm);
    this.searchResultData = searchResultDataJson.response.images;

    this.searchTitle = "Showing results for " + this.searchedTerm;

    // generating the html for each fetched image
    this.shadowRoot.getElementById("imageSearchList").innerHTML = "";
    this.searchResultData.forEach(
      (element,index) => {
        this.searchResultDataHTML.push(`<div class="image hidden" id="imageElement${index}"><img src="${element.image.url}" alt="${element.source.title}"></div>`);
        this.shadowRoot.getElementById("imageSearchList").innerHTML += this.searchResultDataHTML[index];
        
      });
     
    
    // changing image status on click (selected/not selected) 
    this.searchResultData.forEach(
      (_,index) => {
        var currentImage = this.shadowRoot.getElementById("imageElement"+index);
        if (currentImage.getAttribute('listener') !== 'true') {
          currentImage.addEventListener('click',  () =>{
              this.changeImageSelectedStatus(currentImage.id)})
              currentImage.setAttribute('listener', 'true');
         };
      });
      
  
    this.displayPage(1);
    this.showSearchContainerElements();  

    this.dispatchEvent(new CustomEvent('search-content-delivered'));
  }
 
  showSearchContainerElements(){

    this.shadowRoot.getElementById("previousButton").classList.remove("hidden");
    this.shadowRoot.getElementById("nextButton").classList.remove("hidden");
    this.shadowRoot.getElementById("pageNumberP").classList.remove("hidden");
    this.shadowRoot.getElementById("imageSearchList").classList.remove("hidden");
    this.shadowRoot.getElementById("selectAllButton").classList.remove("hidden");
    this.shadowRoot.getElementById("deselectAllButton").classList.remove("hidden");
    this.paginationButtonsHidden = false;
  }

  hideSearchContainerElements(){

    this.shadowRoot.getElementById("previousButton").classList.add("hidden");
    this.shadowRoot.getElementById("nextButton").classList.add("hidden");
    this.shadowRoot.getElementById("pageNumberP").classList.add("hidden");
    this.shadowRoot.getElementById("imageSearchList").classList.add("hidden");
    this.shadowRoot.getElementById("selectAllButton").classList.add("hidden");
    this.shadowRoot.getElementById("deselectAllButton").classList.add("hidden");

    this.paginationButtonsHidden = true;
  }
  
   previousPage()
  {
      if (this.currentPage > 1) {
        for (var index = (this.currentPage-1) * this.imagesPerPage; index < (this.currentPage * this.imagesPerPage) && index < this.searchResultDataHTML.length; index++) {
          this.shadowRoot.getElementById("imageElement" + index).classList.add("hidden");
        }
        this.currentPage--;
          this.displayPage(this.currentPage);
      }
  }
  
   nextPage()
  {
      if (this.currentPage < this.numberOfPages()) {
        for (var index = (this.currentPage-1) * this.imagesPerPage; index < (this.currentPage * this.imagesPerPage) && index < this.searchResultDataHTML.length; index++) {
            this.shadowRoot.getElementById("imageElement" + index).classList.add("hidden");
        }
        this.currentPage++;
          this.displayPage(this.currentPage);
      }
  }
      
   displayPage(page){
      var nextButton = this.shadowRoot.getElementById("nextButton");
      var previousButton = this.shadowRoot.getElementById("previousButton");
      var currentPageNumber = this.shadowRoot.getElementById("page");
   
      // Validate page
      if (page < 1) page = 1;
      if (page > this.numberOfPages()) page = this.numberOfPages();
      
      for (var index = (page-1) * this.imagesPerPage; index < (page * this.imagesPerPage) && index < this.searchResultDataHTML.length; index++) {
        this.shadowRoot.getElementById("imageElement" + index).classList.remove("hidden");
      }


      currentPageNumber.innerHTML = page;
  
      if (page == 1) {
        previousButton.style.visibility = "hidden";
      } else {
        previousButton.style.visibility = "visible";
      }
  
      if (page == this.numberOfPages()) {
          nextButton.style.visibility = "hidden";
      } else {
          nextButton.style.visibility = "visible";
      }
  }
  
   numberOfPages(){
      return Math.ceil(this.searchResultDataHTML.length / this.imagesPerPage);
  }

  changeImageSelectedStatus(imageClickedId){
    var element = this.shadowRoot.getElementById(imageClickedId);
    var imageClickedURL = element.innerHTML.split('"')[1];
      if(element.classList.contains("selected")){
        element.classList.remove("selected");
        this.carouselSelectedImages = this.carouselSelectedImages.filter(function(e) {return e !== imageClickedURL});        

      }
      else{
        element.classList.add("selected");
        this.carouselSelectedImages.push(imageClickedURL);
        }

        if (this.carouselSelectedImages.length > 0){
            this.shadowRoot.getElementById("createCarouselButton").classList.remove("hidden");
        }
        else{
         this.shadowRoot.getElementById("createCarouselButton").classList.add("hidden");
        }

        this.dispatchEvent(new CustomEvent('image-selected-status-changed'));

  }

  selectAllImages(){
    for (var index = 0; index < this.searchResultDataHTML.length; index++) {
        var element = this.shadowRoot.getElementById("imageElement" + index);
        var imageClickedURL = element.innerHTML.split('"')[1];

        if (!element.classList.contains("selected")){
            element.classList.add("selected");
            this.carouselSelectedImages.push(imageClickedURL);
        }    
    }
    this.shadowRoot.getElementById("createCarouselButton").classList.remove("hidden");
  }

  deselectAllImages(){
    for (var index = 0; index < this.searchResultDataHTML.length; index++) {
        this.shadowRoot.getElementById("imageElement" + index).classList.remove("selected");
      }      

      this.carouselSelectedImages = [];
      this.shadowRoot.getElementById("createCarouselButton").classList.add("hidden");

  }

  createImageCarousel(){
  const carouselImagesHTMLElement = this.shadowRoot.getElementById("carouselImagesId");
  carouselImagesHTMLElement.innerHTML = "";
  
  var currentMaxWidthSize = this.carouselMaxWidthSize;
  var currentMaxHeightSize = this.carouselMaxHeightSize;
 
  if (currentMaxHeightSize == currentMaxWidthSize){
    currentMaxHeightSize += 1;
  }
  
  this.carouselSelectedImages.forEach(element =>{
    carouselImagesHTMLElement.innerHTML += `<img src="${element}" alt="" onerror=this.src="https://via.placeholder.com/${currentMaxWidthSize}x${currentMaxHeightSize}">`;
  });

  this.shadowRoot.getElementById("carouselId").style.width = css`${currentMaxWidthSize}px`;
  this.shadowRoot.querySelectorAll('.carousel-images img').forEach(element =>{element.style.maxWidth = css`${currentMaxWidthSize}px`;});
  this.shadowRoot.querySelectorAll('.carousel-images img').forEach(element =>{element.style.width = css`${currentMaxWidthSize}px`;});
  
  this.shadowRoot.getElementById("carouselId").style.height = css`${currentMaxHeightSize}px`;  
  this.shadowRoot.querySelectorAll('.carousel-images img').forEach(element =>{element.style.maxHeight = css`${currentMaxHeightSize}px`;});
  this.shadowRoot.querySelectorAll('.carousel-images img').forEach(element =>{element.style.height = css`${currentMaxHeightSize}px`;});

  const carouselImages = this.shadowRoot.querySelector('.carousel-images');
  const carouselButtons = this.shadowRoot.querySelectorAll('.carousel-button');
  const numberOfImages = this.shadowRoot.querySelectorAll('.carousel-images img').length;
  let imageIndex = 1;
  let translateX = 0;
  carouselButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      if (event.target.id === 'previous') {

        if (imageIndex == 1){
            imageIndex = numberOfImages;
            translateX -= currentMaxWidthSize*(numberOfImages-1);
        }
        else {
            imageIndex--;
            translateX += currentMaxWidthSize;
        }
        
      }
      else{
          if (imageIndex == numberOfImages){
              imageIndex = 1;
              translateX += currentMaxWidthSize*(numberOfImages-1);
          }
          else{
            imageIndex++;
            translateX -= currentMaxWidthSize;
          }
        }

      
      carouselImages.style.transform = `translateX(${translateX}px)`;
    });
  });

  this.shadowRoot.getElementById("carouselId").classList.remove("hidden");
  this.shadowRoot.getElementById("carouselHeaderId").classList.remove("hidden");

 }
}

window.customElements.define('fd-element', FdElement);
