import {LitElement, html, css} from 'lit';

export class FdElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
      }

      ul{
        list-style: none;
      }
      .li{
        display:block;

      }
      img{
        width:100%;
        max-width:600px;
      }
    `;
  }

  constructor() {
    super();
    this.searchBarContent = 'Worlds';
    this.searchTitle = 'Enter your search term';
    this.searchResultData = [
      {
          "url": "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/12/puppy-e1618847364732.jpg",
          "height": 641,
          "width": 960,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=8729994500695172940",
          "thumbnailHeight": 320,
          "thumbnailWidth": 479,
          "base64Encoding": null,
          "name": "",
          "title": "Puppy Insurance: All You Need To Know  Forbes Advisor UK",
          "provider": {
              "name": "forbes",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.forbes.com/uk/advisor/pet-insurance/puppy/"
      },
      {
          "url": "https://cdn.shopify.com/s/files/1/2260/7971/collections/dogs.jpg?v=1504864540",
          "height": 640,
          "width": 640,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=1155794720151574763",
          "thumbnailHeight": 240,
          "thumbnailWidth": 240,
          "base64Encoding": null,
          "name": "",
          "title": "Dogs  MAGOES",
          "provider": {
              "name": "shopify",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://magoes.myshopify.com/collections/dogs"
      },
      {
          "url": "https://eurweb.com/wp-content/uploads/2021/07/puppy-rings-doorbell.jpeg",
          "height": 1075,
          "width": 1911,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=7733570917253926614",
          "thumbnailHeight": 200,
          "thumbnailWidth": 357,
          "base64Encoding": null,
          "name": "",
          "title": "puppy Archives | EURweb",
          "provider": {
              "name": "eurweb",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://eurweb.com/tag/puppy/"
      },
      {
          "url": "https://cdn.rickey.org/2021/03/dogs-bath-bucket-video.jpg",
          "height": 720,
          "width": 1280,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=8009076263078260213",
          "thumbnailHeight": 180,
          "thumbnailWidth": 320,
          "base64Encoding": null,
          "name": "",
          "title": "Dogs Enjoy Relaxing Bath In A Bucket (VIDEO) - Rickey News Videos",
          "provider": {
              "name": "rickey",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.rickey.org/dogs/dogs-bath-bucket-video/"
      },
      {
          "url": "https://axcessnews.com/wp-content/uploads/2021/10/dogs-killed-in-labs.jpg",
          "height": 470,
          "width": 700,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=6643846259445622281",
          "thumbnailHeight": 175,
          "thumbnailWidth": 262,
          "base64Encoding": null,
          "name": "",
          "title": "dogs Archives - Axcess News",
          "provider": {
              "name": "axcessnews",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://axcessnews.com/tag/dogs/"
      },
      {
          "url": "https://www.upsetmagazine.com/images/article/Artist-Images/P/Puppy/puppy-may22.jpg",
          "height": 1000,
          "width": 1500,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=4634591334108477314",
          "thumbnailHeight": 124,
          "thumbnailWidth": 187,
          "base64Encoding": null,
          "name": "",
          "title": "PUPPY have shared a new 90s computer game video for 'Glacial' | Upset",
          "provider": {
              "name": "upsetmagazine",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.upsetmagazine.com/news/puppy-new-video-glacial"
      },
      {
          "url": "https://www.gannett-cdn.com/-mm-/a5076e7a43a0cec6129489319d0fb728e2cd1814/c=0-264-5184-3193/local/-/media/2018/02/06/TXGroup/CorpusChristi/636535322116488816-311593002-puppy-video-03.jpg?width=3200&height=1809&fit=crop&format=pjpg&auto=webp",
          "height": 1809,
          "width": 3200,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=8011794183829224915",
          "thumbnailHeight": 339,
          "thumbnailWidth": 599,
          "base64Encoding": null,
          "name": "",
          "title": "Puppy choked on video awarded to Animal Care with three other dogs",
          "provider": {
              "name": "gannett-cdn",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.theadvertiser.com/story/news/crime/2018/02/26/puppy-choked-video-awarded-animal-care-services-three-other-dogs/375528002/"
      },
      {
          "url": "https://i2-prod.chroniclelive.co.uk/incoming/article24054845.ece/ALTERNATES/s1200/1_Deaf-and-partially-blind-puppy-hopes-for-a-happy-forever-home-in-County-Durham.jpg",
          "height": 630,
          "width": 1200,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=6203813831690286319",
          "thumbnailHeight": 157,
          "thumbnailWidth": 299,
          "base64Encoding": null,
          "name": "",
          "title": "Deaf and partially blind puppy hopes for a happy forever home in County Durham - Chronicle Live",
          "provider": {
              "name": "chroniclelive",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.chroniclelive.co.uk/news/north-east-news/blind-deaf-dog-rescue-puppy-24054728"
      },
      {
          "url": "https://smartcdn.gprod.postmedia.digital/torontosun/wp-content/uploads/2022/05/puppy.jpg?quality=100&strip=all",
          "height": 490,
          "width": 687,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=8377622294500912195",
          "thumbnailHeight": 60,
          "thumbnailWidth": 85,
          "base64Encoding": null,
          "name": "",
          "title": "California puppy chihuahua shot through neck with arrow | Toronto Sun",
          "provider": {
              "name": "postmedia",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://torontosun.com/news/weird/california-puppy-chihuahua-shot-through-neck-with-arrow"
      },
      {
          "url": "https://kesq.b-cdn.net/2022/05/dhs-arrow-puppy.jpg",
          "height": 1080,
          "width": 1920,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=213665311722882257",
          "thumbnailHeight": 67,
          "thumbnailWidth": 119,
          "base64Encoding": null,
          "name": "",
          "title": "PETA offering $5K reward for info on puppy shot with an arrow in Desert Hot Springs - KESQ",
          "provider": {
              "name": "b-cdn",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://kesq.com/news/crime/2022/05/25/peta-offering-5k-reward-for-info-on-puppy-shot-with-an-arrow-in-desert-hot-springs/"
      },
      {
          "url": "https://localnews8.b-cdn.net/2022/05/S185862534-300.jpg",
          "height": 552,
          "width": 987,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=7971214904858443800",
          "thumbnailHeight": 102,
          "thumbnailWidth": 184,
          "base64Encoding": null,
          "name": "<i>WPVI</i><br/>A New Jersey man and his roommate's puppy are recovering after being attacked by a neighborhood dog.",
          "title": "Man, puppy recovering after vicious attack by neighbor's dog: 'I'm heartbroken' - Local News 8",
          "provider": {
              "name": "b-cdn",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://localnews8.com/cnn-regional/2022/05/25/man-puppy-recovering-after-vicious-attack-by-neighbors-dog-im-heartbroken/"
      },
      {
          "url": "https://ktvz.b-cdn.net/2022/05/S185862534-300.jpg",
          "height": 552,
          "width": 987,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=8014958604879845477",
          "thumbnailHeight": 102,
          "thumbnailWidth": 184,
          "base64Encoding": null,
          "name": "<i>WPVI</i><br/>A New Jersey man and his roommate's puppy are recovering after being attacked by a neighborhood dog.",
          "title": "Man, puppy recovering after vicious attack by neighbor's dog: 'I'm heartbroken' - KTVZ",
          "provider": {
              "name": "b-cdn",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://ktvz.com/cnn-regional/2022/05/25/man-puppy-recovering-after-vicious-attack-by-neighbors-dog-im-heartbroken/"
      },
      {
          "url": "https://cdn.newsserve.net/en/knowledge/Chihuahua-dog-_20190131.jpg",
          "height": 609,
          "width": 700,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=6693731774569466300",
          "thumbnailHeight": 227,
          "thumbnailWidth": 262,
          "base64Encoding": null,
          "name": "'An innocent creature': 4-month-old Chihuahua puppy survives being shot in the neck with arrow",
          "title": "'An innocent creature': 4-month-old Chihuahua puppy - One News Page",
          "provider": {
              "name": "newsserve",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.onenewspage.com/n/US/1zobr6mnmy/An-innocent-creature-month-old-Chihuahua.htm"
      },
      {
          "url": "https://images.wagwalkingweb.com/media/training_guides/potty-train-a-cane-corso-puppy/hero/197-How-to-Potty-Train-a-Cane-Corso-Puppy.jpg",
          "height": 583,
          "width": 1476,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=8631119250336937003",
          "thumbnailHeight": 218,
          "thumbnailWidth": 551,
          "base64Encoding": null,
          "name": "",
          "title": "How to Potty Train a Cane Corso Puppy | Wag!",
          "provider": {
              "name": "wagwalkingweb",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://wagwalking.com/training/potty-train-a-cane-corso-puppy"
      },
      {
          "url": "http://wpcluster.dctdigital.com/wp-content/uploads/sites/2/2022/05/Boris-holding-puppy-240522-2dnah5130.jpg",
          "height": 864,
          "width": 1440,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=3590281543801004519",
          "thumbnailHeight": 162,
          "thumbnailWidth": 270,
          "base64Encoding": null,
          "name": "",
          "title": "James Millar: Keep 'two beers and a puppy' people close",
          "provider": {
              "name": "dctdigital",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.pressandjournal.co.uk/fp/opinion/columnists/4328904/two-beers-puppy-james-millar-opinion/"
      },
      {
          "url": "https://www.whittierdailynews.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=2958910252570661486",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  Whittier Daily News",
          "provider": {
              "name": "whittierdailynews",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.whittierdailynews.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://www.sgvtribune.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=7129079966485509563",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  San Gabriel Valley Tribune",
          "provider": {
              "name": "sgvtribune",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.sgvtribune.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://www.sbsun.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=6218151757209624333",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  San Bernardino Sun",
          "provider": {
              "name": "sbsun",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.sbsun.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://www.redlandsdailyfacts.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=7642883162704638233",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  Redlands Daily Facts",
          "provider": {
              "name": "redlandsdailyfacts",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.redlandsdailyfacts.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://www.presstelegram.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=7457383461365208604",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  Press Telegram",
          "provider": {
              "name": "presstelegram",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.presstelegram.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://www.pe.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=3433724194530375689",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  Press Enterprise",
          "provider": {
              "name": "pe",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.pe.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://www.pasadenastarnews.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=7142311563575986198",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  Pasadena Star News",
          "provider": {
              "name": "pasadenastarnews",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.pasadenastarnews.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://www.ocregister.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=5520329362267244185",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  Orange County Register",
          "provider": {
              "name": "ocregister",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.ocregister.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://www.dailybulletin.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=5743406883934298944",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  Daily Bulletin",
          "provider": {
              "name": "dailybulletin",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.dailybulletin.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://www.dailybreeze.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=6195740466557487612",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  Daily Breeze",
          "provider": {
              "name": "dailybreeze",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.dailybreeze.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://townsquare.media/site/397/files/2022/05/attachment-elsa-the-puppy.jpg?w=1200&#x26;h=0&#x26;zc=1&#x26;s=0&#x26;a=t&#x26;q=89",
          "height": 787,
          "width": 1200,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=6401737681155516452",
          "thumbnailHeight": 196,
          "thumbnailWidth": 298,
          "base64Encoding": null,
          "name": "",
          "title": "Ocean City, NJ Puppy Sickened After Eating Discarded Pot",
          "provider": {
              "name": "townsquare",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://catcountry1073.com/ocean-city-nj-puppy-sickened-after-eating-discarded-pot/"
      },
      {
          "url": "https://www.gannett-cdn.com/presto/2022/05/24/PPAS/e3045379-8acb-4ecc-ba3f-c5d5d7410306-Puppy_and_arrow6.JPG?crop=1122,632,x109,y0&width=1122&height=632&format=pjpg&auto=webp",
          "height": 632,
          "width": 1122,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=3070962618718406031",
          "thumbnailHeight": 236,
          "thumbnailWidth": 420,
          "base64Encoding": null,
          "name": "",
          "title": "Puppy found in Desert Hot Springs area with arrow through its neck",
          "provider": {
              "name": "gannett-cdn",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.desertsun.com/story/news/crime_courts/2022/05/23/puppy-found-desert-hot-springs-area-arrow-through-its-neck/9901272002/"
      },
      {
          "url": "https://www.vets4pets.com/siteassets/species/dog/puppy/puppy-running-playing.jpg?w=585&amp;scale=down",
          "height": 1800,
          "width": 3200,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=1327059856226923542",
          "thumbnailHeight": 56,
          "thumbnailWidth": 99,
          "base64Encoding": null,
          "name": "",
          "title": "Introducing puppies to cats",
          "provider": {
              "name": "vets4pets",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.vets4pets.com/pet-health-advice/dog-advice/puppy/introducing-puppies-to-cats/"
      },
      {
          "url": "https://danby.ny.gov/wp-content/uploads/2020/08/hannah-lim-U6nlG0Y5sfs-unsplash-scaled-e1629690164496-600x462.jpg",
          "height": 462,
          "width": 600,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=2691936291798882125",
          "thumbnailHeight": 231,
          "thumbnailWidth": 300,
          "base64Encoding": null,
          "name": "A line of various leashed dogs in front of a pink wall",
          "title": "Dog Licenses - The Town of Danby, New York",
          "provider": {
              "name": "ny",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://danby.ny.gov/service/dogs/"
      },
      {
          "url": "https://hmdp-marxmoda.nyc3.cdn.digitaloceanspaces.com/production/productImages/_1200x630_crop_center-center_82_none/Magis-Puppy-Orange.jpg?mtime=1623160216",
          "height": 630,
          "width": 1200,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=8939571506563488386",
          "thumbnailHeight": 236,
          "thumbnailWidth": 449,
          "base64Encoding": null,
          "name": "",
          "title": "MarxModa | Puppy",
          "provider": {
              "name": "nyc3",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://marxmoda.com/products/puppy"
      },
      {
          "url": "https://www.digitaljournal.com/wp-content/uploads/2022/05/365eb1c209965c55d623967aa660327b473a9370-e1652084316132.jpg",
          "height": 478,
          "width": 768,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=3322374226247687755",
          "thumbnailHeight": 179,
          "thumbnailWidth": 287,
          "base64Encoding": null,
          "name": "With pandemic work-from-home arrangements coming to an end, Nature the Husky, like many dogs in Canada, goes with his owner Bill Dicke to the office",
          "title": "Success in detecting coronavirus in crowds using sniffer dogs - Digital Journal",
          "provider": {
              "name": "digitaljournal",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.digitaljournal.com/tech-science/success-in-detecting-coronavirus-in-crowds-using-sniffer-dogs/article"
      },
      {
          "url": "https://ewscripps.brightspotcdn.com/14/50/16acd49e4c7b82d77ea77dbda3e6/therapy-dogs-in-uvalde.png",
          "height": 584,
          "width": 900,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=4185457831746456093",
          "thumbnailHeight": 218,
          "thumbnailWidth": 337,
          "base64Encoding": null,
          "name": "",
          "title": "Therapy dogs comfort community in Uvalde",
          "provider": {
              "name": "brightspotcdn",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.wxyz.com/news/national/therapy-dogs-comfort-community-in-uvalde"
      },
      {
          "url": "https://infolific.com/images/dogs/dog-food-144564301-resized-1-56a26ad43df78cf7727563d1.jpg",
          "height": 854,
          "width": 1280,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=6760119850588437182",
          "thumbnailHeight": 213,
          "thumbnailWidth": 319,
          "base64Encoding": null,
          "name": "",
          "title": "The 5 Most Common Problems In Dogs From The Wrong Food | Infolific",
          "provider": {
              "name": "infolific",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://infolific.com/pets/dogs/the-5-most-common-problems-in-dogs-from-the-wrong-food/"
      },
      {
          "url": "https://images.saymedia-content.com/.image/t_share/MTgxMzg3NjkxMzkxNjU3MDYz/should-you-leave-food-out-for-puppies-and-dogs.jpg",
          "height": 774,
          "width": 1200,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=6733245458257959189",
          "thumbnailHeight": 168,
          "thumbnailWidth": 260,
          "base64Encoding": null,
          "name": "should-you-leave-food-out-for-puppies-and-dogs",
          "title": "Should You Leave Food Out for Dogs All Day? Free-Feeding Versus Scheduled Meals - PetHelpful",
          "provider": {
              "name": "saymedia-content",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://pethelpful.com/dogs/Should-You-Leave-Food-Out-For-Puppies-and-Dogs"
      },
      {
          "url": "https://cromwell-intl.com/travel/chile/dogs/pictures/dogs-0705-150924.jpg",
          "height": 600,
          "width": 800,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=7345493002625403328",
          "thumbnailHeight": 196,
          "thumbnailWidth": 261,
          "base64Encoding": null,
          "name": "",
          "title": "The Dogs of Chile",
          "provider": {
              "name": "cromwell-intl",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://cromwell-intl.com/travel/chile/dogs/Index.html"
      },
      {
          "url": "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2019/05/Apple-cider-vinegar-for-dogs_01.png",
          "height": 505,
          "width": 970,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=2144221870355905812",
          "thumbnailHeight": 188,
          "thumbnailWidth": 363,
          "base64Encoding": null,
          "name": "Close up of medium size, tan and black dog on green grass licking his muzzle.",
          "title": "Apple Cider Vinegar for Dogs: Benefits & Uses | Petfinder",
          "provider": {
              "name": "d17fnq9dkz9hgj",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.petfinder.com/dogs/dog-nutrition/apple-cider-vinegar-for-dogs/"
      },
      {
          "url": "https://images.indianexpress.com/2022/05/stray-dogs-1.jpg",
          "height": 667,
          "width": 1200,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=6035266573129382437",
          "thumbnailHeight": 166,
          "thumbnailWidth": 298,
          "base64Encoding": null,
          "name": "delhi high court stray dogs canine distemper parvovirus",
          "title": "Stray dogs in city a neglected lot: Delhi HC | Delhi news",
          "provider": {
              "name": "indianexpress",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://indianexpress.com/article/cities/delhi/stray-dogs-delhi-high-court-canine-distemper-parvovirus-7936472/"
      },
      {
          "url": "https://www.dailynews.com/wp-content/uploads/2022/05/RPE-Z-PUPPY-0524-16x9-1.jpg?w=1024",
          "height": 575,
          "width": 1024,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=7740347425210831076",
          "thumbnailHeight": 161,
          "thumbnailWidth": 286,
          "base64Encoding": null,
          "name": "",
          "title": "Chihuahua puppy mix found shot with an arrow in Desert Hot Springs, is expected to survive  Daily News",
          "provider": {
              "name": "dailynews",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.dailynews.com/2022/05/23/chihuahua-puppy-mix-found-shot-with-an-arrow-in-desert-hot-springs-is-expected-to-survive/"
      },
      {
          "url": "https://cdn.newsserve.net/en/knowledge/Uvalde-Texas_20200825.jpg",
          "height": 700,
          "width": 933,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=8427319028195177639",
          "thumbnailHeight": 195,
          "thumbnailWidth": 261,
          "base64Encoding": null,
          "name": "Comfort dogs have been deployed to Uvalde, Texas, from near and far",
          "title": "Comfort dogs have been deployed to Uvalde, Texas, from - One News Page",
          "provider": {
              "name": "newsserve",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.onenewspage.com/n/US/1zobr6n6li/Comfort-dogs-have-been-deployed-to-Uvalde-Texas.htm"
      },
      {
          "url": "https://images.wagwalkingweb.com/media/training_guides/train-a-german-shepherd-puppy-to-sit/hero/49-How-to-Train-a-German-Shepherd-Puppy-to-Sit.jpg",
          "height": 583,
          "width": 1476,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=7133891494524694657",
          "thumbnailHeight": 218,
          "thumbnailWidth": 551,
          "base64Encoding": null,
          "name": "",
          "title": "How to Train a German Shepherd Puppy to Sit | Wag!",
          "provider": {
              "name": "wagwalkingweb",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://wagwalking.com/training/train-a-german-shepherd-puppy-to-sit"
      },
      {
          "url": "https://www.koin.com/wp-content/uploads/sites/10/2022/05/puppy-Oreo-stolen-downtown-car-prowl-PPB.jpg?w=1280",
          "height": 390,
          "width": 640,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=4473438786720223966",
          "thumbnailHeight": 195,
          "thumbnailWidth": 320,
          "base64Encoding": null,
          "name": "",
          "title": "Puppy returned after being stolen from car in downtown Portland",
          "provider": {
              "name": "koin",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.koin.com/news/oregon/puppy-found-after-being-stolen-from-car-while-owner-was-at-work/"
      },
      {
          "url": "https://www.vets4pets.com/siteassets/species/dog/puppy/two-puppies-playing-outside-in-grass.jpg?w=585&amp;scale=down",
          "height": 1800,
          "width": 3200,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=827292432925474570",
          "thumbnailHeight": 56,
          "thumbnailWidth": 99,
          "base64Encoding": null,
          "name": "",
          "title": "The Puppy Socialisation Period | Vets4Pets",
          "provider": {
              "name": "vets4pets",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.vets4pets.com/pet-health-advice/dog-advice/puppy/the-puppy-socialisation-period/"
      },
      {
          "url": "https://i2-prod.mirror.co.uk/incoming/article27059397.ece/ALTERNATES/s1200/0_Puppy-found-with-arrow-through-neck-expected-to-survive.jpg",
          "height": 630,
          "width": 1200,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=770312556557868502",
          "thumbnailHeight": 157,
          "thumbnailWidth": 299,
          "base64Encoding": null,
          "name": "",
          "title": "Tiny puppy found 'screaming' with arrow through neck lucky to survive - Mirror Online",
          "provider": {
              "name": "mirror",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.mirror.co.uk/news/us-news/tiny-puppy-found-screaming-arrow-27059663"
      },
      {
          "url": "https://images.wagwalkingweb.com/media/training_guides/crate-train-a-mastiff-puppy/hero/How-to-Crate-Train-a-Mastiff-Puppy.jpg",
          "height": 1400,
          "width": 2400,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=6767688547738402923",
          "thumbnailHeight": 196,
          "thumbnailWidth": 336,
          "base64Encoding": null,
          "name": "",
          "title": "How to Crate Train a Mastiff Puppy | Wag!",
          "provider": {
              "name": "wagwalkingweb",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://wagwalking.com/training/crate-train-a-mastiff-puppy"
      },
      {
          "url": "https://i2-prod.mirror.co.uk/incoming/article27041486.ece/ALTERNATES/s1200/0_Rip-Boy-5-has-sidekick-puppy-stolen-through-kitchen-window.jpg",
          "height": 630,
          "width": 1200,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=4422485426587226092",
          "thumbnailHeight": 157,
          "thumbnailWidth": 299,
          "base64Encoding": null,
          "name": "",
          "title": "Autistic boy, 5, reunites with stolen puppy after thief robbed him from kitchen window - Mirror Online",
          "provider": {
              "name": "mirror",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://www.mirror.co.uk/news/uk-news/autistic-boy-5-reunites-stolen-27041481"
      },
      {
          "url": "https://images.wagwalkingweb.com/media/grooming_guides/general/trim-a-dogs-claws/hero/trim-a-dogs-claws.jpg",
          "height": 1400,
          "width": 2100,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=5309788809553848057",
          "thumbnailHeight": 393,
          "thumbnailWidth": 589,
          "base64Encoding": null,
          "name": "",
          "title": "How to Trim a Dog's Claws | Wag!",
          "provider": {
              "name": "wagwalkingweb",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://wagwalking.com/grooming/trim-a-dogs-claws"
      },
      {
          "url": "https://gooddaysacramento.cbslocal.com/wp-content/uploads/sites/31326160/2020/04/GoodDay-H.png?w=640&amp;h=360&amp;crop=1",
          "height": 360,
          "width": 640,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=1303509306831591415",
          "thumbnailHeight": 360,
          "thumbnailWidth": 640,
          "base64Encoding": null,
          "name": "",
          "title": "Dogs  Good Day Sacramento",
          "provider": {
              "name": "cbslocal",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://gooddaysacramento.cbslocal.com/tag/dogs/"
      },
      {
          "url": "http://i.cdn.turner.com/cnn/.e/img/3.0/sect/blogs/global/no_image_640x360.png",
          "height": 360,
          "width": 640,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=452442898421731761",
          "thumbnailHeight": 360,
          "thumbnailWidth": 640,
          "base64Encoding": null,
          "name": "",
          "title": "Dogs  CNN Photos - CNN.com Blogs",
          "provider": {
              "name": "turner",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://cnnphotos.blogs.cnn.com/category/dogs/"
      },
      {
          "url": "https://f4.bcbits.com/img/a2551479819_5.jpg",
          "height": 700,
          "width": 700,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=4300645591081944631",
          "thumbnailHeight": 196,
          "thumbnailWidth": 196,
          "base64Encoding": null,
          "name": "",
          "title": "Dogs | Fazed Out | Sick Scene Productions",
          "provider": {
              "name": "bcbits",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "https://sickscene.bandcamp.com/track/dogs"
      },
      {
          "url": "https://media.wired.com/photos/61b7e77093c301c027def249/191:100/w_1280,c_limit/Who-Killed-the-Robot-Dog-.jpg",
          "height": 648,
          "width": 1238,
          "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=8700892429507384911",
          "thumbnailHeight": 161,
          "thumbnailWidth": 309,
          "base64Encoding": null,
          "name": "",
          "title": "Dogs | Latest News, Photos & Videos | WIRED",
          "provider": {
              "name": "wired",
              "favIcon": "",
              "favIconBase64Encoding": ""
          },
          "imageWebSearchUrl": "https://usearch.com/search/puppy/images",
          "webpageUrl": "http://wired.com/tag/dogs"
      }
  ];
  }

  static get properties() {
    return {
      searchTitle: {type: String},
      searchResultData: {type: Array},

    };
  }

 

  async fetchSearchData(searchTerm){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '0cd85b04b2msh1d9736529d5a00cp1c6d2bjsn237860ecbb9a'
      }
    };

    return fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=' + searchTerm + '&pageNumber=1&pageSize=50&autoCorrect=true&safeSearch=true', options)
      .then(response => response.json())
      .then(responseJson => { console.log(responseJson.value);console.log("asd"); return responseJson; })
      .catch(err => console.error(err));
  }

   render() {
    return html`
      <h1>${this.searchTitle}</h1>
      <input id="searchBarInput" type="text"/>
      <button @click=${this.searchBarInputClick} part="button">
          Search
      </button>
      <ul id="imageSearchList">
      </ul>
      <slot></slot>
    `;
  }

  async searchBarInputClick() {
    this.searchTitle = "Waiting for search results for " + this.shadowRoot.getElementById("searchBarInput").value;
   
    //const searchResultJson = await this.fetchSearchData(this.shadowRoot.getElementById("searchBarInput").value);
    //this.searchResultData = searchResultJson.value;


    //console.log(this.searchResultData);
    this.searchTitle = "Showing results for " + this.shadowRoot.getElementById("searchBarInput").value;

    var imageListContentString = "";
    this.searchResultData.forEach(element =>
    {
      imageListContentString += "<li><img src=\""+element.url + "\"/></li>";
    });
    this.shadowRoot.getElementById("imageSearchList").innerHTML = imageListContentString;
    this.dispatchEvent(new CustomEvent('search-content-delivered'));
  }

}

window.customElements.define('fd-element', FdElement);
