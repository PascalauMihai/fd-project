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
    this.searchResultData = [
        {
            "source": {
                "name": "The Neighbor's Cat",
                "page": "https://www.theneighborscat.com/cat-lounge-dublin",
                "title": "Cat Lounge Dublin — The Neighbor's Cat"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfk2Yw6n1nxeGyMi5WlrWEaKUT-ROrlkpo2fmaruNWLfaZpDp3mQStv7tplTtpLSLLFI&usqp=CAU",
                "height": 194,
                "width": 259
            },
            "image": {
                "url": "https://images.squarespace-cdn.com/content/v1/59014ed8db29d637250fa476/1517855624152-UIA3GRO6LK64EMO85H53/Cat_lounge_dublin-045.jpg",
                "height": 1875,
                "width": 2500
            },
            "dominantColor": "rgb(152,152,146)"
        },
        {
            "source": {
                "name": "Wikipedia",
                "page": "https://en.wikipedia.org/wiki/Tabby_cat",
                "title": "Tabby cat - Wikipedia"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XZdbcM6yKK4fk9fIJE07OVXK_RjOBgXY67iibHK7zDdPp638HArpPmtfkGTSJhT5vcM&usqp=CAU",
                "height": 259,
                "width": 194
            },
            "image": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
                "height": 1602,
                "width": 1200
            },
            "dominantColor": "rgb(96,80,64)"
        },
        {
            "source": {
                "name": "International Cat Care",
                "page": "https://icatcare.org/advice/thinking-of-getting-a-cat/",
                "title": "Thinking of getting a cat? | International Cat Care"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgI8sYlvf_yqwiRKl4fm7Pzej5Sehs-yVEQG-cHKmFKVp2YSDdImymVCH-T_zXJdCJwnY&usqp=CAU",
                "height": 159,
                "width": 318
            },
            "image": {
                "url": "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
                "height": 600,
                "width": 1200
            },
            "dominantColor": "rgb(153,156,153)"
        },
        {
            "source": {
                "name": "Pet Sitters Ireland",
                "page": "https://www.petsittersireland.com/cat-sitter-dublin/",
                "title": "Why Use A Cat Sitter in Dublin: Cat Sitting Service"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmabl4HoryzeM5FNAhlUN41EaoSclonjVFhkoxCed-P5jbFxiEMxgd0oS6U0LpcMZoxE&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://www.petsittersireland.com/wp-content/uploads/2018/02/Ragdoll-Cat-Blue-Eyes.jpg",
                "height": 639,
                "width": 960
            },
            "dominantColor": "rgb(168,155,136)"
        },
        {
            "source": {
                "name": "The Guardian",
                "page": "https://www.theguardian.com/lifeandstyle/2020/sep/05/what-cats-mean-by-miaow-japans-pet-guru-knows-just-what-your-feline-friend-wants",
                "title": "What does your cat mean by 'miaow'? Let Japan's pet guru Yuki Hattori  explain | Cats | The Guardian"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiLOiEP-qSR6OgMrPELypnHToVToGPEc_qTkuLq5mMKwCCMoQ4x6Fsn19uvBoDO0qZaQ&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",
                "height": 1200,
                "width": 1200
            },
            "dominantColor": "rgb(208,192,170)"
        },
        {
            "source": {
                "name": "Wikipedia",
                "page": "https://en.wikipedia.org/wiki/Cat",
                "title": "Cat - Wikipedia"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnn8c2_5gvD9zPYo0zG2BH4YYcmz5_mQnmKfnotHBhMvUzS-BCdbONDYxZZ3SN5khNurw&usqp=CAU",
                "height": 182,
                "width": 277
            },
            "image": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg",
                "height": 3898,
                "width": 5935
            },
            "dominantColor": "rgb(225,228,225)"
        },
        {
            "source": {
                "name": "National Geographic",
                "page": "https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat",
                "title": "Cat | National Geographic"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk47D6iWB70ycCyVAMtPDZMFZbIQi6qn5ZkmE9yG6L1UE57m2bxiLFf6L6agjWrQ0_SZI&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
                "height": 3072,
                "width": 3072
            },
            "dominantColor": "rgb(224,224,218)"
        },
        {
            "source": {
                "name": "Reader's Digest",
                "page": "https://www.rd.com/list/black-cat-breeds/",
                "title": "22 Beautiful Black Cat Breeds | Reader's Digest"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzEalgbULpbmQW-fR8NlCkln9eseiV1wjdNNkkTULW7HX067o0fFscE8_yLwLhJFd9Zw&usqp=CAU",
                "height": 181,
                "width": 278
            },
            "image": {
                "url": "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
                "height": 1400,
                "width": 2141
            },
            "dominantColor": "rgb(50,50,56)"
        },
        {
            "source": {
                "name": "Wiktionary",
                "page": "https://en.wiktionary.org/wiki/cat",
                "title": "cat - Wiktionary"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU",
                "height": 224,
                "width": 225
            },
            "image": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
                "height": 1199,
                "width": 1200
            },
            "dominantColor": "rgb(152,114,75)"
        },
        {
            "source": {
                "name": "Wired UK",
                "page": "https://www.wired.co.uk/article/tably-cat-happy-facial-expression",
                "title": "Is my cat happy? This app predicts feline moods | WIRED UK"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3SXFNblGaRmCv95gbBa7sdEInq5xrgrLt93OhRL0INrlgeAQ2EVGJU4Zj6BpFJdfA8I&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
                "height": 2219,
                "width": 3329
            },
            "dominantColor": "rgb(168,155,136)"
        },
        {
            "source": {
                "name": "Encyclopedia Britannica",
                "page": "https://www.britannica.com/list/the-10-best-types-of-cat",
                "title": "The 10 Best Types of Cat | Britannica"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMY8pFpoo1BUkSBbhh2GLGzuRnkU1rqCvG63hIuWT5IPQ9oXUnfpbfLCHcwsWld-bKPC8&usqp=CAU",
                "height": 275,
                "width": 184
            },
            "image": {
                "url": "https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60",
                "height": 1600,
                "width": 1071
            },
            "dominantColor": "rgb(234,237,240)"
        },
        {
            "source": {
                "name": "Wikipedia",
                "page": "https://en.wikipedia.org/wiki/Odd-eyed_cat",
                "title": "Odd-eyed cat - Wikipedia"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfeh2OibC1NImBHcsXkbzJ7VQQXcLeDIvq9eRJh4DzpnG6zFpc7PXmprHyvukuBgmTsM&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/VAN_CAT.png",
                "height": 3840,
                "width": 3840
            },
            "dominantColor": "rgb(136,117,98)"
        },
        {
            "source": {
                "name": "NPR",
                "page": "https://www.npr.org/2021/08/10/1026508261/does-your-cat-like-you-or-just-tolerate-you",
                "title": "Are Cats Really Aloof? : Short Wave : NPR"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYAz8KkEz-c1lbWA8KhHzTzdnp4GveBDaF2LPxjSyE0RI8sq5bJTGjxU7pn1nWSvDGNk&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-e28def62c2d01ee6368d9aa312c68998415b5e72-s1100-c50.jpg",
                "height": 618,
                "width": 1100
            },
            "dominantColor": "rgb(226,232,232)"
        },
        {
            "source": {
                "name": "Cattery Dublin",
                "page": "http://catterydublin.ie/service/cat-hotel/",
                "title": "Cat Hotel | Cat Hotel Dublin - Luxury, Comfort & Peace of mind -"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfChUQYicVbg5GVLNGAKVAasNl_bjDe5njuDDxpEr8sielL6WT_9leTDSvl18-1PUPqow&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "http://catterydublin.ie/wp-content/uploads/2014/06/I4HKV8YZYF.jpg",
                "height": 3456,
                "width": 5184
            },
            "dominantColor": "rgb(168,155,136)"
        },
        {
            "source": {
                "name": "Independent.ie",
                "page": "https://www.independent.ie/regionals/dublin/dublin-news/warning-over-illegal-stray-cat-collection-scam-in-south-dublin-40822884.html",
                "title": "Warning over illegal stray cat collection scam in south Dublin -  Independent.ie"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1DXFtbXTejmFj7bLrzQuTvA44tQ-QPwSyPW4Q2fbmcxS2nGrw_RYumi6tNqJtMcHT5M&usqp=CAU",
                "height": 194,
                "width": 259
            },
            "image": {
                "url": "https://www.independent.ie/regionals/dublin/dublin-news/5c3ef/40822883.ece/AUTOCROP/w620/YOUR%20MONEY%20PIC%20CATS%20KITTENS",
                "height": 465,
                "width": 620
            },
            "dominantColor": "rgb(104,75,53)"
        },
        {
            "source": {
                "name": "National Geographic",
                "page": "https://www.nationalgeographic.com/animals/article/animals-cats-training-pets",
                "title": "Why You're Probably Training Your Cat All Wrong"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwKU3vmP9_2hzIBoxHTTQIQIuEoAc3VZ8LGepH-rAv__9a_QuIJkc3M70h2r0e4EWF4Q&usqp=CAU",
                "height": 259,
                "width": 194
            },
            "image": {
                "url": "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg",
                "height": 3072,
                "width": 2305
            },
            "dominantColor": "rgb(184,152,133)"
        },
        {
            "source": {
                "name": "Daily Sabah",
                "page": "https://www.dailysabah.com/gallery/worlds-most-popular-cat-breeds/images",
                "title": "World's most popular cat breeds | Daily Sabah"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkSKqR24pRN1E02ABfGTbJItewmcFliLMDZxNed9aPBW7GRIZyiQ2b_dgGFCfLM-NsiM&usqp=CAU",
                "height": 183,
                "width": 276
            },
            "image": {
                "url": "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg",
                "height": 1062,
                "width": 1600
            },
            "dominantColor": "rgb(200,200,194)"
        },
        {
            "source": {
                "name": "The Conversation",
                "page": "https://theconversation.com/why-does-my-cat-wake-me-up-so-early-and-what-can-i-do-about-it-180959",
                "title": "Why does my cat wake me up so early, and what can I do about it?"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_isjG7bbwBQ82jnsst5Tb6liXh9b3ecC394g-4KhT85myTInIxlNMmqhFSIsuTXfHuHk&usqp=CAU",
                "height": 189,
                "width": 267
            },
            "image": {
                "url": "https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
                "height": 706,
                "width": 1000
            },
            "dominantColor": "rgb(120,117,120)"
        },
        {
            "source": {
                "name": "The Conversation",
                "page": "https://theconversation.com/physics-and-psychology-of-cats-an-improbable-conversation-176020",
                "title": "Physics and psychology of cats – an (improbable) conversation"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtObZOGto7ZFkmOcyF3H-cDTKIIxeNG1qs0qqsbsANMCHbR-Ww3M22PTaSa88v3sTtEaw&usqp=CAU",
                "height": 192,
                "width": 262
            },
            "image": {
                "url": "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip",
                "height": 680,
                "width": 926
            },
            "dominantColor": "rgb(144,115,112)"
        },
        {
            "source": {
                "name": "Vanity Fair",
                "page": "https://www.vanityfair.com/hollywood/2020/08/andrew-lloyd-webber-cats-movie",
                "title": "Andrew Lloyd Webber, Creator of Cats, Says Cats Movie Was “Ridiculous” |  Vanity Fair"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfxP5UczbULQe2hivtF4smKwnH0jbBEw1UHh828MoC_bVOaLJsjBTrn6IYWqIQNsVqoIU&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://media.vanityfair.com/photos/5e27310def889c00087c7928/master/pass/taylor-swift-cats.jpg",
                "height": 1333,
                "width": 2000
            },
            "dominantColor": "rgb(72,43,34)"
        },
        {
            "source": {
                "name": "HelpGuide.org",
                "page": "https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm",
                "title": "The Joys of Owning a Cat - HelpGuide.org"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVcX9dkcB63vFnm-tx0-_8SZbabLFEVEUjQ&usqp=CAU",
                "height": 174,
                "width": 290
            },
            "image": {
                "url": "https://www.helpguide.org/wp-content/uploads/man-in-bed-cradling-cat-768.jpg",
                "height": 461,
                "width": 768
            },
            "dominantColor": "rgb(192,192,192)"
        },
        {
            "source": {
                "name": "Pet WebMD",
                "page": "https://pets.webmd.com/cats/cat-vaccines",
                "title": "The Shots Your Cat Needs"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJey2FR2kEDYmQSQZFMwo0ia0s34xMvFxZA&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
                "height": 1200,
                "width": 1800
            },
            "dominantColor": "rgb(56,50,30)"
        },
        {
            "source": {
                "name": "Purina",
                "page": "https://www.purina.co.uk/articles/cats/behaviour/understanding-cats/cat-body-language",
                "title": "Understanding Cat Body Language & Behaviour | Purina"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMRvMpDHj3hIWP8RksfRXE2d9IfmSxEUAWQ&usqp=CAU",
                "height": 140,
                "width": 360
            },
            "image": {
                "url": "https://www.purina.co.uk/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg",
                "height": 560,
                "width": 1440
            },
            "dominantColor": "rgb(112,112,112)"
        },
        {
            "source": {
                "name": "Prestige Animal Hospital",
                "page": "https://www.prestigeanimalhospital.com/services/cats/blog/20-cat-facts-thatll-blow-your-kitty-crazed-mind",
                "title": "20 Cat Facts That'll Blow Your Kitty-Crazed Mind"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sLgf6bCvUFxwQ_5TnXxSDeK-5dug_kP5Nw&usqp=CAU",
                "height": 145,
                "width": 348
            },
            "image": {
                "url": "https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg",
                "height": 427,
                "width": 1024
            },
            "dominantColor": "rgb(224,192,173)"
        },
        {
            "source": {
                "name": "The New York Times",
                "page": "https://www.nytimes.com/2021/09/07/science/cat-stripes-genetics.html",
                "title": "How the Cat Gets Its Stripes: It's Genetics, Not a Folk Tale - The New York  Times"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszHtHXYkShquFKPb8D2MXutGH97YCeajQHQ&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg",
                "height": 1365,
                "width": 2048
            },
            "dominantColor": "rgb(242,245,248)"
        },
        {
            "source": {
                "name": "Smithsonian Magazine",
                "page": "https://www.smithsonianmag.com/history/history-felines-narrated-and-illustrated-cat-180976368/",
                "title": "A History of Felines, as Narrated and Illustrated by a Cat | History |  Smithsonian Magazine"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXpsm4RSo0WUNpbs_GPjBlwiv3QYb6OYnfA&usqp=CAU",
                "height": 194,
                "width": 259
            },
            "image": {
                "url": "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg",
                "height": 1050,
                "width": 1400
            },
            "dominantColor": "rgb(136,120,72)"
        },
        {
            "source": {
                "name": "The Guardian",
                "page": "https://www.theguardian.com/lifeandstyle/2021/dec/08/the-inner-lives-of-cats-what-our-feline-friends-really-think-about-hugs-happiness-and-humans",
                "title": "The inner lives of cats: what our feline friends really think about hugs,  happiness and humans | Cats | The Guardian"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6ojhO0FOnGnLeVt7349g3KMDqkaG5EKz8A&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b6ba011b74a9f7a5c8322fe75478d9df",
                "height": 1200,
                "width": 1200
            },
            "dominantColor": "rgb(64,51,45)"
        },
        {
            "source": {
                "name": "International Cat Care",
                "page": "https://icatcare.org/advice/elderly-cats-special-considerations/",
                "title": "Elderly cats – special considerations | International Cat Care"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUsE1pPOGvHvuyeXiSdvFmpJvlrJy0YJcyw&usqp=CAU",
                "height": 159,
                "width": 318
            },
            "image": {
                "url": "https://icatcare.org/app/uploads/2018/07/Elderly-cats.png",
                "height": 600,
                "width": 1200
            },
            "dominantColor": "rgb(160,115,77)"
        },
        {
            "source": {
                "name": "The Neighbor's Cat",
                "page": "https://www.theneighborscat.com/cat-lounge-dublin",
                "title": "Cat Lounge Dublin — The Neighbor's Cat"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCi5X1v3IseuHAleUcUm_Dgvow0kbzTnmtmw&usqp=CAU",
                "height": 194,
                "width": 259
            },
            "image": {
                "url": "https://images.squarespace-cdn.com/content/v1/59014ed8db29d637250fa476/1517855648852-GZETOALAD1D12132TBL3/Cat_lounge_dublin-004.jpg",
                "height": 1875,
                "width": 2500
            },
            "dominantColor": "rgb(24,24,24)"
        },
        {
            "source": {
                "name": "Scientific American",
                "page": "https://www.scientificamerican.com/article/cats-recognize-their-own-names-even-if-they-choose-to-ignore-them/",
                "title": "Cats Recognize Their Own Names--Even If They Choose to Ignore Them -  Scientific American"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU",
                "height": 200,
                "width": 252
            },
            "image": {
                "url": "https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg",
                "height": 3587,
                "width": 4500
            },
            "dominantColor": "rgb(208,192,176)"
        },
        {
            "source": {
                "name": "Hakai Magazine",
                "page": "https://hakaimagazine.com/features/its-10-pm-do-you-know-where-your-cat-is/",
                "title": "It's 10 PM. Do You Know Where Your Cat Is? | Hakai Magazine"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2tXVXzqEFTyDDYX9XoGPy4yUZu8qY0cq4g&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog1963808/instagram-freedom-from-cats_300x300.jpg",
                "height": 300,
                "width": 300
            },
            "dominantColor": "rgb(10,13,16)"
        },
        {
            "source": {
                "name": "The Independent",
                "page": "https://www.independent.co.uk/news/uk/home-news/cat-returns-home-cremation-cheshire-b1866833.html",
                "title": "Cat returns home after family believe they cremated him | The Independent"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7t4GtTX9MDwzbf67MQFaM6fxiQUZ4FImvg&usqp=CAU",
                "height": 193,
                "width": 261
            },
            "image": {
                "url": "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?quality=75&width=982&height=726&auto=webp",
                "height": 726,
                "width": 982
            },
            "dominantColor": "rgb(16,16,16)"
        },
        {
            "source": {
                "name": "The Spruce Pets",
                "page": "https://www.thesprucepets.com/how-is-a-cats-age-determined-554296",
                "title": "How to Determine Your Cat's Age"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbPdsMTCNZcwI9y_ebV7jyf3ImNDqNYUOdg&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://www.thesprucepets.com/thmb/FfEAaq_eXMxruRAZWVxooL2cWgU=/4749x4749/smart/filters:no_upscale()/how-is-a-cats-age-determined-554296-01-52252e4c987b4655a4bf14394757e54e.jpg",
                "height": 4749,
                "width": 4749
            },
            "dominantColor": "rgb(16,13,10)"
        },
        {
            "source": {
                "name": "Encyclopedia Britannica",
                "page": "https://www.britannica.com/animal/cat",
                "title": "cat | Breeds & Facts | Britannica"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7cTZJYZ2RSj8ZpHVH8swQhU-hYEFPcI5LQ&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
                "height": 620,
                "width": 930
            },
            "dominantColor": "rgb(208,202,195)"
        },
        {
            "source": {
                "name": "The Spruce",
                "page": "https://www.thespruce.com/cat-repellents-to-keep-cats-out-of-your-yard-2132573",
                "title": "Ways to Keep Cats Out of Your Yard or Garden"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1OCPjhCWyMnJRIIcHyRoHGCDWSRKfYY-LA&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://www.thespruce.com/thmb/zFM0V-NYOIvZJ-kKu6zeW9Fkvq4=/5206x3471/filters:fill(auto,1)/cat-repellents-to-keep-cats-out-of-your-yard-2132573-hero-23591eb06a8f4c909238657db9fbfb4e.jpg",
                "height": 3471,
                "width": 5206
            },
            "dominantColor": "rgb(56,50,30)"
        },
        {
            "source": {
                "name": "icatcare.org",
                "page": "https://icatcare.org/",
                "title": "International Cat Care | For the love of cats"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBCzc5OJPIS8KURZWyEp-wymztGO0Z4irhA&usqp=CAU",
                "height": 163,
                "width": 310
            },
            "image": {
                "url": "https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg",
                "height": 630,
                "width": 1200
            },
            "dominantColor": "rgb(136,117,91)"
        },
        {
            "source": {
                "name": "Scientific American",
                "page": "https://www.scientificamerican.com/article/why-do-cats-purr/",
                "title": "Why do cats purr? - Scientific American"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHUlP6F15TiQpEK3oo9uzyvk0gFBypWJqAA&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://static.scientificamerican.com/sciam/cache/file/9CAE9C60-8BC5-4CA3-95C180EFACDD99FD_source.jpg",
                "height": 3744,
                "width": 5616
            },
            "dominantColor": "rgb(168,155,130)"
        },
        {
            "source": {
                "name": "Daily Paws",
                "page": "https://www.dailypaws.com/cats-kittens/cat-names/badass-cat-names",
                "title": "250+ Badass Cat Names for Your Ferocious Feline | Daily Paws"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUQt4sIK0giykpSeGJ4xvDxpNYYmBIi9Gvg&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F10%2Fleaping-orange-kitten-92071640-2000.jpg",
                "height": 1330,
                "width": 2000
            },
            "dominantColor": "rgb(216,197,171)"
        },
        {
            "source": {
                "name": "Hartz",
                "page": "https://www.hartz.com/seven-steps-to-toilet-training-your-cat/",
                "title": "Seven Steps to Toilet Training Your Cat | Hartz"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShX3G--rOqjQXhhag_YrDAxCTZ00mdX8CCqA&usqp=CAU",
                "height": 205,
                "width": 246
            },
            "image": {
                "url": "https://www.hartz.com/wp-content/uploads/2021/10/seven-steps-to-toilet-train-cat-1.jpg",
                "height": 750,
                "width": 900
            },
            "dominantColor": "rgb(120,117,107)"
        },
        {
            "source": {
                "name": "The Spruce Pets",
                "page": "https://www.thesprucepets.com/cat-talk-eyes-553942",
                "title": "What Your Cat Is Saying With Its Eyes"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbHKCvVwI1otDjPaLdJnp3yKzpfYtIaUWMA&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://www.thesprucepets.com/thmb/QDw4vt7XXQejL2IRztKeRLow6hA=/2776x1561/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                "height": 1561,
                "width": 2776
            },
            "dominantColor": "rgb(128,118,102)"
        },
        {
            "source": {
                "name": "The Verge",
                "page": "https://www.theverge.com/2021/4/12/22379880/artificial-intelligence-cat-photos-gan",
                "title": "Soon, the internet will make its own cat photos and then it won't need us -  The Verge"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkI9b0nFXG6y3XDCT1B3OH6yIh3xiqVqZCyg&usqp=CAU",
                "height": 194,
                "width": 259
            },
            "image": {
                "url": "https://cdn.vox-cdn.com/thumbor/RAa4vElXQFahH4WLraKlPOxasBM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22438301/fake_cats.jpg",
                "height": 1050,
                "width": 1400
            },
            "dominantColor": "rgb(120,117,107)"
        },
        {
            "source": {
                "name": "Purina",
                "page": "https://www.purina.co.uk/articles/cats/health/daily-care/do-cats-need-baths",
                "title": "Do Cats Need Baths? Advice On Bathing Cats | Purina"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzckOM3H1JqMX3kPD2qRvcdupxOoBOFm1BA&usqp=CAU",
                "height": 140,
                "width": 360
            },
            "image": {
                "url": "https://www.purina.co.uk/sites/default/files/2020-12/Bathing-Cats-Everything-You-Need-to-KnowHERO.jpg",
                "height": 560,
                "width": 1440
            },
            "dominantColor": "rgb(136,117,91)"
        },
        {
            "source": {
                "name": "The Guardian",
                "page": "https://www.theguardian.com/lifeandstyle/2021/aug/05/toxic-cat-food-fear-as-vets-struggle-with-mysterious-illness",
                "title": "Toxic cat food fear as UK vets struggle with mysterious illness | Cats |  The Guardian"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgwRBuul3ZKdhP9cA8kG625mAPHDUm6Gu7A&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://i.guim.co.uk/img/media/2b6917e42b3dfdde6562d916d69cecc587ff6bba/0_113_3500_2100/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d287604adc9d0c510cbc500f99f4df78",
                "height": 1200,
                "width": 1200
            },
            "dominantColor": "rgb(128,115,102)"
        },
        {
            "source": {
                "name": "Treehugger",
                "page": "https://www.treehugger.com/why-do-cats-purr-4864293",
                "title": "Why Do Cats Purr?"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDZ2lTXq_hKowK_nXmT3usuqeId0dJueFsg&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://www.treehugger.com/thmb/HCoAfo2u5p-mJBJTk7wNlxJfrUg=/6240x4160/filters:fill(auto,1)/kittybluebackground-9970cd8fb6de422a93cc0456add38704.JPG",
                "height": 4160,
                "width": 6240
            },
            "dominantColor": "rgb(216,194,178)"
        },
        {
            "source": {
                "name": "Her.ie",
                "page": "https://www.her.ie/news/dublins-cat-cafe-has-announced-that-it-is-closing-its-doors-412743",
                "title": "Dublin's cat café has announced that it is closing its doors | Her.ie"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZHvBe0UjCTDGAaiV4CAMAVua7SItgFIx_w&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzEwXFxcLzA3MTA1MzE2XFxcL2NhdHMtLTEwMjR4NzY4LmpwZ1wiLFwid2lkdGhcIjo3NDAsXCJoZWlnaHRcIjo0MTYsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5oZXIuaWVcXFwvYXNzZXRzXFxcL2ltYWdlc1xcXC9oZXJcXFwvbm8taW1hZ2UucG5nP3Y9NVwifSIsImhhc2giOiI2MDgxOTcwM2NiNTkzZDcwZTVlNDk2ZDRjNGFhNjVlYjAzN2VmNDYwIn0=/cats-1024x768.jpg",
                "height": 416,
                "width": 740
            },
            "dominantColor": "rgb(64,45,45)"
        },
        {
            "source": {
                "name": "National Today",
                "page": "https://nationaltoday.com/international-cat-day/",
                "title": "International Cat Day"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUMjPWJM2TXEK6Djy50MhsT42SopKYfWU-Q&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day.jpg",
                "height": 1200,
                "width": 1200
            },
            "dominantColor": "rgb(48,29,35)"
        },
        {
            "source": {
                "name": "Vox",
                "page": "https://www.vox.com/22440221/best-money-quarantine-cat-pet",
                "title": "A cat who doesn't like me is the best £85 I ever spent” - Vox"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubLv76mdfM274kbRU8XKTMyWmSbdm9e9Ibg&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://cdn.vox-cdn.com/thumbor/KebUREZeTMw3U3RU5qAAd1BSbAs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22520158/Cat.jpg",
                "height": 1400,
                "width": 1400
            },
            "dominantColor": "rgb(88,82,75)"
        },
        {
            "source": {
                "name": "NDTV.com",
                "page": "https://www.ndtv.com/offbeat/international-cat-day-2021-date-theme-and-significance-2505460",
                "title": "International Cat Day 2021: Date, Theme And Significance"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdls-mU0gKRuIC3S3tVwerRTtUHPLD7JxdA&usqp=CAU",
                "height": 176,
                "width": 286
            },
            "image": {
                "url": "https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg?im=Resize=(1230,900)",
                "height": 757,
                "width": 1230
            },
            "dominantColor": "rgb(160,154,147)"
        },
        {
            "source": {
                "name": "Good Housekeeping",
                "page": "https://www.goodhousekeeping.com/life/pets/g21525625/why-cats-are-best-pets/",
                "title": "20 Reasons Why Cats Make the Best Pets - Facts About Cats"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7JCP_0OzYFxwoboGZuIhYRZXfPesPjuym9g&usqp=CAU",
                "height": 225,
                "width": 224
            },
            "image": {
                "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-1559241235.jpg?crop=0.586xw:0.880xh;0.0684xw,0.0611xh&resize=640:*",
                "height": 641,
                "width": 640
            },
            "dominantColor": "rgb(232,226,219)"
        },
        {
            "source": {
                "name": "NPR",
                "page": "https://www.npr.org/2021/08/17/1028495560/cat-saves-elderly-woman-fallen-ravine-cornfield-cornwall-england",
                "title": "Hero Cat Helps Save An 83-Year-Old Woman Who Had Fallen Down A Ravine In  England : NPR"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KV2RTg4UPBZffMFhRxW5gDfzh4upALDyzw&usqp=CAU",
                "height": 194,
                "width": 259
            },
            "image": {
                "url": "https://media.npr.org/assets/img/2021/08/17/gettyimages-135773550-bb02ff79dd836d6e4170d4bc555423f24fa29d5e.jpg",
                "height": 2911,
                "width": 3881
            },
            "dominantColor": "rgb(42,52,49)"
        },
        {
            "source": {
                "name": "Fundación Affinity",
                "page": "https://www.fundacion-affinity.org/en/dogs-cats-and-people/i-have-pet/10-main-sounds-cat-makes",
                "title": "The 10 main sounds a cat makes | Affinity Foundation"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxcBFr9_OCjZhAqRcMMQtHpggYpvATLsLzQ&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-gato-fa.jpg",
                "height": 1000,
                "width": 1499
            },
            "dominantColor": "rgb(128,118,96)"
        },
        {
            "source": {
                "name": "Daily Paws",
                "page": "https://www.dailypaws.com/cats-kittens/cat-names/cute-cat-names",
                "title": "300+ Cute Cat Names for Every Kind of Kitty | Daily Paws"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmnSabWD5a0W1Sasnht8NGqrRCDtSzFapGQ&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Forange-kitten-955480082-2000.jpg",
                "height": 1333,
                "width": 2000
            },
            "dominantColor": "rgb(200,155,110)"
        },
        {
            "source": {
                "name": "Phibsboro Cat Rescue",
                "page": "http://www.phibsborocatrescue.ie/adopting-a-cat/",
                "title": "Adopt a Kitty – Phibsboro Cat Rescue"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznebEb4Bgg7ext7jbQCqU9bah_VUJ5ZF4jQ&usqp=CAU",
                "height": 174,
                "width": 290
            },
            "image": {
                "url": "http://www.phibsborocatrescue.ie/wp-content/uploads/cropped-header-01.jpg",
                "height": 1200,
                "width": 2000
            },
            "dominantColor": "rgb(56,50,43)"
        },
        {
            "source": {
                "name": "Vox",
                "page": "https://www.vox.com/culture/2019/12/18/21021186/cats-review",
                "title": "Cats review: A deep and inscrutable movie - Vox"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVzsy1Vk-vy6SUfQ-MreN7oAc9bJWYaB5mg&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://cdn.vox-cdn.com/thumbor/MfAL89LfeltyZgd9Ra8C2iBjq3U=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19539772/cats4.jpg",
                "height": 1400,
                "width": 1400
            },
            "dominantColor": "rgb(72,46,27)"
        },
        {
            "source": {
                "name": "The Humane Society of the United States",
                "page": "https://www.humanesociety.org/resources/cats-meow",
                "title": "The cat's meow | The Humane Society of the United States"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VyCF39_x0MhTZema9w9qnFPw6SgAAnY0lA&usqp=CAU",
                "height": 168,
                "width": 299
            },
            "image": {
                "url": "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
                "height": 698,
                "width": 1240
            },
            "dominantColor": "rgb(184,114,107)"
        },
        {
            "source": {
                "name": "BBC",
                "page": "https://www.bbc.com/future/article/20191024-why-do-we-think-cats-are-unfriendly",
                "title": "Why do we think cats are unfriendly? - BBC Future"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2ysrPvhIBLoo22vh1IW1cPRT4YEaSA52Rg&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
                "height": 549,
                "width": 976
            },
            "dominantColor": "rgb(82,85,88)"
        },
        {
            "source": {
                "name": "The Conversation",
                "page": "https://theconversation.com/how-we-found-coronavirus-in-a-cat-143697",
                "title": "How we found coronavirus in a cat"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3YwtjvwP5xpwNSi-ubPyzXafxeQPD4W_uQ&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
                "height": 675,
                "width": 1200
            },
            "dominantColor": "rgb(67,176,208)"
        },
        {
            "source": {
                "name": "Cat in a Flat",
                "page": "https://ie.catinaflat.com/",
                "title": "Cat sitter near me with Cat in a Flat - Ireland"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusfazEeAH1qN_7QuQtevCcWydncr_8tBk1A&usqp=CAU",
                "height": 143,
                "width": 353
            },
            "image": {
                "url": "https://ie.catinaflat.com/static/imgs/header-v2-308a3b92.jpg",
                "height": 414,
                "width": 1024
            },
            "dominantColor": "rgb(200,190,187)"
        },
        {
            "source": {
                "name": "Purina",
                "page": "https://www.purina.com/articles/cat/facts/10-fascinating-facts-about-cats",
                "title": "10 Fascinating Facts About Cats | Purina"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1-aEtVRm1DYIoTGEPF9yyVQIHl3unYB8TQ&usqp=CAU",
                "height": 174,
                "width": 290
            },
            "image": {
                "url": "https://www.purina.com/sites/g/files/auxxlc196/files/styles/social_share_large/public/10-facts-about-cats_500x300.jpg?itok=LNrDGbec",
                "height": 300,
                "width": 500
            },
            "dominantColor": "rgb(48,45,42)"
        },
        {
            "source": {
                "name": "Fear Free Happy Homes",
                "page": "https://www.fearfreehappyhomes.com/what-movement-and-gait-tell-you-about-your-cat/",
                "title": "What Movement and Gait Tell You About Your Cat | Fear Free Happy Homes"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-YouEbFysqdVKhae8zApG6O8P1JYoAAHtQ&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/shutterstock_707431309-e1554172878508.jpg",
                "height": 801,
                "width": 1200
            },
            "dominantColor": "rgb(96,86,77)"
        },
        {
            "source": {
                "name": "National Geographic",
                "page": "https://www.nationalgeographic.com/adventure/article/140127-cats-pets-animals-nation-dogs-people-science",
                "title": "What Do Cats Think About Us? You May Be Surprised"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKYe00NaD5SQjIMvXYPssq0r1dXJggL3ZIg&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg",
                "height": 2048,
                "width": 3072
            },
            "dominantColor": "rgb(194,197,200)"
        },
        {
            "source": {
                "name": "BBC",
                "page": "https://www.bbc.com/news/uk-england-essex-60030533",
                "title": "Braintree missing cat found after owner hears meow on vet's phone - BBC News"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZJLT6Q6V673cftVOQor7Sq4pwIaErX8Gmg&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://ichef.bbci.co.uk/news/976/cpsprodpb/F00D/production/_121935416_d68a3cbd-75ac-4ac8-ab77-f663a5cf148f.jpg",
                "height": 549,
                "width": 976
            },
            "dominantColor": "rgb(200,194,187)"
        },
        {
            "source": {
                "name": "Good Housekeeping",
                "page": "https://www.goodhousekeeping.com/life/pets/g26898596/large-cat-breeds/",
                "title": "10 Best Large Cat Breeds - Top Big Cat List and Pictures"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3iMGn3C4BxucUZA_K0u0CMRQSvZp8n2XFw&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-cat-breed-1553197454.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
                "height": 640,
                "width": 640
            },
            "dominantColor": "rgb(193,196,193)"
        },
        {
            "source": {
                "name": "International Cat Care",
                "page": "https://icatcare.org/advice/neutering-your-cat/",
                "title": "Neutering your cat | International Cat Care"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeB4aArDOntl48L6LFkyWtIf4nhH0YGYqmg&usqp=CAU",
                "height": 159,
                "width": 318
            },
            "image": {
                "url": "https://icatcare.org/app/uploads/2018/07/Neutering-your-cat-1.png",
                "height": 600,
                "width": 1200
            },
            "dominantColor": "rgb(176,157,138)"
        },
        {
            "source": {
                "name": "RTE",
                "page": "https://www.rte.ie/entertainment/2022/0526/1301262-heroic-newry-cat-spuds-up-for-national-cat-award-in-uk/",
                "title": "Heroic Newry cat Spuds up for National Cat Award in UK"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYsVYYuoJ91BEZNtQHAPicQH5CP0D0kvM-g&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://img.rasset.ie/001bcbdc-614.jpg?ratio=1.78",
                "height": 345,
                "width": 614
            },
            "dominantColor": "rgb(136,120,98)"
        },
        {
            "source": {
                "name": "The Spruce Pets",
                "page": "https://www.thesprucepets.com/facts-about-black-cats-554102",
                "title": "5 Pawsitively Fascinating Facts About Black Cats"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6siKQ0DM7xkgCNED_QC9xIJdqY91cDV06GA&usqp=CAU",
                "height": 225,
                "width": 225
            },
            "image": {
                "url": "https://www.thesprucepets.com/thmb/KajBQBoVh7ufdWXMWubNwKqs_Y0=/5132x5132/smart/filters:no_upscale()/facts-about-black-cats-554102-hero-7281a22d75584d448290c359780c2ead.jpg",
                "height": 5132,
                "width": 5132
            },
            "dominantColor": "rgb(8,8,8)"
        },
        {
            "source": {
                "name": "Martha Stewart",
                "page": "https://www.marthastewart.com/2140307/what-is-catnip",
                "title": "What Is Catnip and How Does It Affect Your Cat? | Martha Stewart"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLshlLQkVsmMDuoYjkOPQy9Icop3a0nzX3w&usqp=CAU",
                "height": 175,
                "width": 287
            },
            "image": {
                "url": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2019%2F10%2Fcat-with-catnip-getty-1019.jpg&q=60",
                "height": 3082,
                "width": 5048
            },
            "dominantColor": "rgb(240,240,240)"
        },
        {
            "source": {
                "name": "FirstVet",
                "page": "https://firstvet.com/uk/articles/vomiting-and-diarrhoea-in-cats-1",
                "title": "Vomiting and diarrhoea in cats | FirstVet"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlQiGiiTHr9WTvJvwP9y55i_qTygBhFHrV5g&usqp=CAU",
                "height": 163,
                "width": 310
            },
            "image": {
                "url": "https://firstvet.com/uploaded/images/articles/_1200x630_crop_center-center_82_none/Cat-vomitingdiarrhea.jpg?mtime=1562592055",
                "height": 630,
                "width": 1200
            },
            "dominantColor": "rgb(128,115,96)"
        },
        {
            "source": {
                "name": "Today's Veterinary Practice -",
                "page": "https://todaysveterinarypractice.com/preventive-medicine/optimal-age-spay-neuter-cat/",
                "title": "Is There an Optimal Age for Cat Spay or Neuter? | Today's Veterinary  Practice"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDduJE_nzbgyYtH9x8fRzFQsLVMLtiBIH2oQ&usqp=CAU",
                "height": 146,
                "width": 345
            },
            "image": {
                "url": "https://todaysveterinarypractice.com/wp-content/uploads/sites/4/2020/12/TVP_JanFeb21_SpayNueterAge_MainImage.jpg",
                "height": 419,
                "width": 990
            },
            "dominantColor": "rgb(200,190,187)"
        },
        {
            "source": {
                "name": "NBC News",
                "page": "https://www.nbcnews.com/health/health-news/cats-really-do-need-their-humans-even-if-they-don-n1057431",
                "title": "Cats really do need their humans, even if they don't show it"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3beT1ULdyy5CSeLhDYdLRt1CmOjET0FZ4NQ&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
                "height": 1000,
                "width": 1500
            },
            "dominantColor": "rgb(232,232,232)"
        },
        {
            "source": {
                "name": "Penn Today - University of Pennsylvania",
                "page": "https://penntoday.upenn.edu/news/covid-cat-penn-vet-elizabeth-lennon",
                "title": "COVID in a cat | Penn Today"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53mFIv9hms2lwmKucD41EuVHA5SnUkPELOw&usqp=CAU",
                "height": 183,
                "width": 276
            },
            "image": {
                "url": "https://penntoday.upenn.edu/sites/default/files/2022-03/Cat-COVID.jpeg",
                "height": 1411,
                "width": 2124
            },
            "dominantColor": "rgb(216,88,62)"
        },
        {
            "source": {
                "name": "Encyclopedia Britannica",
                "page": "https://www.britannica.com/story/feral-cats-of-the-last-frontier",
                "title": "Feral Cats of the Last Frontier | Britannica"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYNPIp5e5fUSJyi8oLhqvFTrV2v7w8C3eKw&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://cdn.britannica.com/02/195502-050-52B9CD21/gang-cats-Alaksa.jpg?q=60",
                "height": 1066,
                "width": 1600
            },
            "dominantColor": "rgb(121,124,121)"
        },
        {
            "source": {
                "name": "Live Science",
                "page": "https://www.livescience.com/cat-infected-covid-19-from-owner.html",
                "title": "Cat infected with COVID-19 from owner in Belgium | Live Science"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4it_Jqeo2FMOA-0f2yJk5uYJ3YTa1j7MVSA&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg",
                "height": 1575,
                "width": 2800
            },
            "dominantColor": "rgb(120,117,114)"
        },
        {
            "source": {
                "name": "The Verge",
                "page": "https://www.theverge.com/2021/4/12/22379880/artificial-intelligence-cat-photos-gan",
                "title": "Soon, the internet will make its own cat photos and then it won't need us -  The Verge"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLQMEGR7ATeqhlmDIdUxgW7ifxVzScZ8ghw&usqp=CAU",
                "height": 224,
                "width": 225
            },
            "image": {
                "url": "https://cdn.vox-cdn.com/thumbor/5hjeoXGrD-9dsTQC36Eh0ZeHQoE=/0x0:984x982/1200x0/filters:focal(0x0:984x982):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22438212/Screen_Shot_2021_04_12_at_8.15.22_AM.png",
                "height": 982,
                "width": 984
            },
            "dominantColor": "rgb(195,227,240)"
        },
        {
            "source": {
                "name": "BBC Science Focus Magazine",
                "page": "https://www.sciencefocus.com/nature/six-reasons-your-cat-is-wilder-than-you-think/",
                "title": "6 reasons your domestic cat is wilder than you think | BBC Science Focus  Magazine"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzH3VAH_GLDTAsSVZDriPAcjCoI-yvjFI6bg&usqp=CAU",
                "height": 146,
                "width": 344
            },
            "image": {
                "url": "https://images.immediate.co.uk/production/volatile/sites/4/2018/08/iStock_13967830_XLARGE-90f249d.jpg?quality=90&resize=940,400",
                "height": 400,
                "width": 940
            },
            "dominantColor": "rgb(81,84,81)"
        },
        {
            "source": {
                "name": "Smithsonian Magazine",
                "page": "https://www.smithsonianmag.com/smart-news/human-genomes-are-surprisingly-cat-like-180978332/",
                "title": "Human Genomes Are Surprisingly Cat-Like | Smart News| Smithsonian Magazine"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQIDnydkpuJvQtwUwbC4_rLtFjLxUKAKo9A&usqp=CAU",
                "height": 194,
                "width": 259
            },
            "image": {
                "url": "https://th-thumbnailer.cdn-si-edu.com/wVkY4ktA-0JvRsuh8EASm6NoSNs=/1000x750/filters:no_upscale():focal(978x630:979x631)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/db/82/db8234fc-f167-4285-82bd-123d035e32ad/cats.jpg",
                "height": 750,
                "width": 1000
            },
            "dominantColor": "rgb(113,116,113)"
        },
        {
            "source": {
                "name": "Healthline",
                "page": "https://www.healthline.com/health/cat-scratch-disease",
                "title": "Cat Scratch Fever: Causes, Symptoms, and Diagnosis"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvo7y5idL24eFUNa3CXORCtel5B1rHf-W0cQ&usqp=CAU",
                "height": 162,
                "width": 311
            },
            "image": {
                "url": "https://post.healthline.com/wp-content/uploads/2020/09/4609-cat-1200x628-facebook-1200x628.jpg",
                "height": 628,
                "width": 1200
            },
            "dominantColor": "rgb(208,198,208)"
        },
        {
            "source": {
                "name": "YouTube",
                "page": "https://www.youtube.com/watch?v=jH7e1fDcZnY",
                "title": "The Cat Raised by a Mouse - YouTube"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDeKBl-t7zU25GKPFWbzpzaZl0uFk7OAojg&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://i.ytimg.com/vi/jH7e1fDcZnY/maxresdefault.jpg",
                "height": 720,
                "width": 1280
            },
            "dominantColor": "rgb(74,84,23)"
        },
        {
            "source": {
                "name": "Everyday Health",
                "page": "https://www.everydayhealth.com/pet-health/ten-cat-exercises.aspx",
                "title": "10 Cat Exercises Your Pet Will Enjoy | Everyday Health"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0368m9d6iodinCvX4m-Xa36ERR-QpYkdxAQ&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://images.everydayhealth.com/images/pet-health/cs-pet-health-cat-exercises-1440x810.jpg",
                "height": 810,
                "width": 1440
            },
            "dominantColor": "rgb(56,50,43)"
        },
        {
            "source": {
                "name": "Vets4Pets",
                "page": "https://www.vets4pets.com/pet-health-advice/cat-advice/neutering-your-cat/",
                "title": "Neutering Your Cat | Cat Advice | Vets4Pets"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IqeKtRQRYNslKdZ_S4vZj30nChI-iFpGqg&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://www.vets4pets.com/siteassets/species/cat/close-up-of-cat.jpg?width=1040",
                "height": 585,
                "width": 1040
            },
            "dominantColor": "rgb(144,115,99)"
        },
        {
            "source": {
                "name": "Today Show",
                "page": "https://www.today.com/pets/pets/martha-stewart-says-dogs-mistakenly-killed-cat-princess-peony-rcna22798",
                "title": "Martha Stewart's Cat Mistakenly Killed by Her 4 Dogs"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QuFrfC9K8jNbQBDfGXabz2kukhp2RFCByQ&usqp=CAU",
                "height": 159,
                "width": 318
            },
            "image": {
                "url": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-04/martha-stewart-cat-kb-2x1-220404-629e1f.jpg",
                "height": 1200,
                "width": 2400
            },
            "dominantColor": "rgb(208,192,176)"
        },
        {
            "source": {
                "name": "Hola",
                "page": "https://www.hola.com/us/lifestyle/20211125306223/how-much-cats-understand/",
                "title": "How much does your cat understand? You may be surprised"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGh1j_G1UBHQsUOipXFVR-xwk_0ogPG5Iu2g&usqp=CAU",
                "height": 174,
                "width": 290
            },
            "image": {
                "url": "https://www.hola.com/us/images/026f-13ac8cc84b8c-e186928dd1f4-1000/horizontal-480/a-cat-playing-in-a-yard-in-beijing-china.jpg",
                "height": 288,
                "width": 480
            },
            "dominantColor": "rgb(112,80,67)"
        },
        {
            "source": {
                "name": "TheJournal.ie",
                "page": "https://www.thejournal.ie/phibsboro-cat-rescue-looking-for-home-2887293-Jul2016/",
                "title": "Home sought for dozens of stray cats as rescue group loses Dublin HQ"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23qnA1dVR8R7R5HakwOllx5kvfEnNPyz58A&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "http://c1.thejournal.ie/media/2016/07/june-5-752x501.jpg",
                "height": 501,
                "width": 752
            },
            "dominantColor": "rgb(152,117,82)"
        },
        {
            "source": {
                "name": "The New Yorker",
                "page": "https://www.newyorker.com/culture/culture-desk/cats-reviewed-its-not-quite-weird-enough",
                "title": "Cats,” Reviewed: It's Not Quite Weird Enough | The New Yorker"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHY85mXccjqXUz5qt0e2avg8Z6Ro4V_66oIw&usqp=CAU",
                "height": 224,
                "width": 224
            },
            "image": {
                "url": "https://media.newyorker.com/photos/5dfab39dde5fcf00086aec77/1:1/w_1706,h_1706,c_limit/Lane-Cats.jpg",
                "height": 1706,
                "width": 1706
            },
            "dominantColor": "rgb(32,26,19)"
        },
        {
            "source": {
                "name": "ScienceAlert",
                "page": "https://www.sciencealert.com/you-can-build-a-rapport-with-your-cat-by-blinking-real-slow",
                "title": "Study Confirms 'Slow Blinks' Really Do Work to Communicate With Your Cat"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIL_aCfTx-_PlHGzNYlL3crMTcMZa6wUFZw&usqp=CAU",
                "height": 143,
                "width": 353
            },
            "image": {
                "url": "https://www.sciencealert.com/images/2020-10/processed/happycat_1024.jpg",
                "height": 415,
                "width": 1024
            },
            "dominantColor": "rgb(216,194,165)"
        },
        {
            "source": {
                "name": "Wikipedia",
                "page": "https://en.wikipedia.org/wiki/Kitten",
                "title": "Kitten - Wikipedia"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZBVltbIEEDTKwVGA2fRX3wW7rT4tR3k_Kw&usqp=CAU",
                "height": 213,
                "width": 237
            },
            "image": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg",
                "height": 3000,
                "width": 3336
            },
            "dominantColor": "rgb(221,234,240)"
        },
        {
            "source": {
                "name": "YouTube",
                "page": "https://www.youtube.com/watch?v=Ii8h7DCIcMo",
                "title": "Baby Cats - Cute and Funny Cat Videos Compilation #38 | Aww Animals -  YouTube"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKgcxc5Ma6iJEF93H2S4vSP_sHp5RzMc3Xg&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://i.ytimg.com/vi/Ii8h7DCIcMo/maxresdefault.jpg",
                "height": 720,
                "width": 1280
            },
            "dominantColor": "rgb(208,192,163)"
        },
        {
            "source": {
                "name": "GOV.UK",
                "page": "https://www.gov.uk/government/news/cat-microchipping-to-be-made-mandatory",
                "title": "Cat microchipping to be made mandatory - GOV.UK"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuSwh_DY_07CwE4VPd8HDpX1wfLGS_k5aFA&usqp=CAU",
                "height": 181,
                "width": 279
            },
            "image": {
                "url": "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/137286/s300_Untitled_design__15_.png",
                "height": 195,
                "width": 300
            },
            "dominantColor": "rgb(216,194,165)"
        },
        {
            "source": {
                "name": "The New York Times",
                "page": "https://www.nytimes.com/2019/09/24/science/cats-humans-bonding.html",
                "title": "Cats Like People! (Some People, Anyway) - The New York Times"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg7H8NNWM9bE-tjuYQfzr6mfgZnVdUSTUAg&usqp=CAU",
                "height": 162,
                "width": 311
            },
            "image": {
                "url": "https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/00SCI-CATS1-facebookJumbo.jpg?year=2019&h=549&w=1050&s=a12758d1b750010957f6d8dcafd0fb707ac2f98675c4cd264adc01b93205d41e&k=ZQJBKqZ0VN",
                "height": 549,
                "width": 1050
            },
            "dominantColor": "rgb(56,50,30)"
        },
        {
            "source": {
                "name": "ISPCA",
                "page": "https://www.ispca.ie/news/detail/feral_cat_awareness_week",
                "title": "Feral Cat AwarenessISPCA"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4J1nUw5SnmHrkZPPP27V0f0qQO_JnLYG9g&usqp=CAU",
                "height": 194,
                "width": 259
            },
            "image": {
                "url": "https://www.ispca.ie/uploads/IMG_1750_resized.jpg",
                "height": 450,
                "width": 600
            },
            "dominantColor": "rgb(168,158,117)"
        },
        {
            "source": {
                "name": "The Washington Post",
                "page": "https://www.washingtonpost.com/science/2019/11/30/cats-do-have-facial-expressions-you-probably-cant-read-them/",
                "title": "Cats do have facial expressions, but you probably can't read them - The  Washington Post"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCC4squwzXz2nJjoLg54HZI__bsl39JUc6NQ&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WALN4MAIT4I6VLRIPUMJQAJIME.jpg",
                "height": 2000,
                "width": 3000
            },
            "dominantColor": "rgb(80,51,35)"
        },
        {
            "source": {
                "name": "The Guardian",
                "page": "https://www.theguardian.com/world/2022/feb/17/uk-could-ban-part-wild-hybrid-cats-after-social-media-fuels-boom-in-popularity",
                "title": "UK could ban part-wild hybrid cats after social media fuels boom in  popularity | Animal welfare | The Guardian"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqx-4fXL2-OsZmHBsAHze0DB6bwfemJQrNDg&usqp=CAU",
                "height": 174,
                "width": 290
            },
            "image": {
                "url": "https://i.guim.co.uk/img/media/e01ce2efabf7d6a8ba6f1f455434596de0b0b960/0_292_2394_1436/master/2394.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=0b1c0b7659772ca4114ef5f4e20a1ddb",
                "height": 558,
                "width": 930
            },
            "dominantColor": "rgb(128,118,96)"
        },
        {
            "source": {
                "name": "RSPCA",
                "page": "https://www.rspca.org.uk/adviceandwelfare/pets/cats/straycats",
                "title": "What To Do With Stray & Feral Cats | RSPCA"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHPwhRibglaxKr5sav7EXvBr-jGLizfGjHg&usqp=CAU",
                "height": 133,
                "width": 378
            },
            "image": {
                "url": "https://www.rspca.org.uk/documents/1494939/0/what+to+do+with+stray+cats+and+kittens+%283%29.jpg/886bc0d5-1dc5-d2bf-eabd-473fd4d99886?t=1618404272031",
                "height": 350,
                "width": 990
            },
            "dominantColor": "rgb(136,120,98)"
        },
        {
            "source": {
                "name": "PETA",
                "page": "https://www.peta.org/living/animal-companions/how-to-cat-proof-your-christmas-tree/",
                "title": "How To Cat-Proof Your Christmas Tree This Holiday | PETA"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZtBH22ALWkKluZVus3GpwABNKYIC9ZFyQw&usqp=CAU",
                "height": 172,
                "width": 293
            },
            "image": {
                "url": "https://www.peta.org/wp-content/uploads/2017/11/iStock-805170532_absolutimages.jpg",
                "height": 706,
                "width": 1200
            },
            "dominantColor": "rgb(184,149,114)"
        },
        {
            "source": {
                "name": "Hindustan Times",
                "page": "https://www.hindustantimes.com/more-lifestyle/international-cat-day-20-interesting-cat-facts-you-must-know/story-iv9FrRfnckBynrzIbgmlGO.html",
                "title": "International Cat Day: 20 interesting cat facts you must know - Hindustan  Times"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4eHKh1qN906A0HB9qTmKHh7jAHs8JHit5w&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/08/08/Pictures/_6bda0940-b9ad-11e9-98cb-e738ad509720.jpg",
                "height": 354,
                "width": 630
            },
            "dominantColor": "rgb(128,118,102)"
        },
        {
            "source": {
                "name": "USA Today",
                "page": "https://www.usatoday.com/story/news/nation/2022/04/28/cat-missing-16-years-reunited-owner/9568672002/",
                "title": "Cat that vanished in 2006 reunited with owner after 16 years"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqH8o9TMpba64_tJFCfFD-eJ9TA_fvNDj4A&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://www.gannett-cdn.com/presto/2022/04/27/PWIL/5543b51b-da8c-414d-9457-0e04e5db0d2f-IMG_1832.JPEG?crop=2315,1302,x0,y563&width=2315&height=1302&format=pjpg&auto=webp",
                "height": 1302,
                "width": 2315
            },
            "dominantColor": "rgb(88,82,75)"
        },
        {
            "source": {
                "name": "BBC",
                "page": "https://www.bbc.com/news/world-europe-50247789",
                "title": "Cat attack: Moscow man faces five years in jail - BBC News"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGe5Fb5oPYeErtqsGPGMfCRJtg5ptD7rFNQ&usqp=CAU",
                "height": 168,
                "width": 300
            },
            "image": {
                "url": "https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg",
                "height": 360,
                "width": 640
            },
            "dominantColor": "rgb(208,192,170)"
        },
        {
            "source": {
                "name": "The Mirror",
                "page": "https://www.mirror.co.uk/news/real-life-stories/my-cat-enormous-everyone-thinks-25979552",
                "title": "My cat is so enormous everyone thinks he's a dog - and he's still growing'  - Mirror Online"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpBjpntMf0J6Ie2QhJCLImaehZMzEncq5QA&usqp=CAU",
                "height": 163,
                "width": 310
            },
            "image": {
                "url": "https://i2-prod.mirror.co.uk/incoming/article25979624.ece/ALTERNATES/s1200/0_SWNS_HUGE_CAT_02.jpg",
                "height": 630,
                "width": 1200
            },
            "dominantColor": "rgb(128,70,32)"
        },
        {
            "source": {
                "name": "Hakai Magazine",
                "page": "https://hakaimagazine.com/features/its-10-pm-do-you-know-where-your-cat-is/",
                "title": "It's 10 PM. Do You Know Where Your Cat Is? | Hakai Magazine"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvg4_lDqqYV_z0z4pYRBOYUQcNa2ofJrJ4w&usqp=CAU",
                "height": 183,
                "width": 275
            },
            "image": {
                "url": "https://hakaimagazine.com/wp-content/uploads/bird-in-mouth-freedom-from-cats.jpg",
                "height": 1666,
                "width": 2500
            },
            "dominantColor": "rgb(226,229,232)"
        },
        {
            "source": {
                "name": "Austin American-Statesman",
                "page": "https://www.statesman.com/story/news/2022/05/05/ut-cat-domino-dies-after-more-than-decade-on-campus-university-texas/9630043002/",
                "title": "Beloved UT cat Domino dies after more than a decade living on campus"
            },
            "thumbnail": {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDI0k6TlHRwyA0JlKuG1afSi_K9S6ndDYAw&usqp=CAU",
                "height": 168,
                "width": 299
            },
            "image": {
                "url": "https://www.gannett-cdn.com/presto/2022/05/04/NAAS/036c1420-4b9e-4ae2-b0ca-8e1d7602189f-Domino--the-cat-202127425-2100x1400-3127466f-dd8b-429c-b923-4f0916c15c75.png?crop=2099,1181,x0,y106&width=660&height=372&format=pjpg&auto=webp",
                "height": 372,
                "width": 660
            },
            "dominantColor": "rgb(10,16,16)"
        }
    ];    
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
    this.searchTitle = "Waiting for search results for " + this.searchedTerm;

    const searchResultDataJson = await this.fetchSearchData(this.searchedTerm);
    this.searchResultData = searchResultDataJson.response.images;

    this.searchTitle = "Showing results for " + this.shadowRoot.getElementById("searchBarInput").value;

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
