function headerFunction(){
        return `<div class="header">
        <div><img src="./Images/Spotify_logo.png" alt=""></div>
        <div><img src="./Images/Home_logo.png" alt=""></div>
        <div>
            <img src="./Images/Search_logo.png" alt="">
            <p>What do you want to play?<p>
            <img src="./Images/Browse_logo.png" alt="" class="browser_logo">
        </div>
        <div></div>
        <div><p>Premium</p></div>
        <div><p>Support</p></div>
        <div><p>Download</p></div>
        <div>
            <img src="./Images/Download_logo.png" alt="">
            <p>Install App</p>
        </div>
        <div><p>Sign up</p></div>
        <div>Log in</div>
        </div>
        <div class="header2">
            <div>
                <div class="head_logo">
                    <img src="./Images/Spotify_logo.png" alt="">
                </div>
                <div></div>
                <div class="head_side">
                    <img src="./Images/Search_logo.png" alt="">
                    <div>
                        Open App
                    </div>
                    <div class="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div id="header_bottom">
                <p>Get Premium</p>
                <p>Take control of your listening with ad-free music. Cancel anytime.</p>
                <div>Get Premium</div>
            </div>
        </div>`;
}
document.body.innerHTML += headerFunction();

var sideContent=[
    {
        head1: `Create your first playlist`,
        head2:`It's easy, we'll help you`,
        button:`Create Playlist`
    },{
        head1: `Let's find some podcasts to follow`,
        head2: `We'll keep you updated on new episodes`,
        button: `Browse podcasts`
    }
]
function sidebarFunction(sideContent){
        return `<div class="sidebar">
        <div>
            <img src="./Images/Library_logo.png" alt="">
            <p>Your Library</p>
            <h5>+</h5>
        </div>
        ${sideContent.map(function(sideDiv){
            return `<div id="creation">
            <p>${sideDiv.head1}</p>
            <p>${sideDiv.head2}</p>
            <div>${sideDiv.button}</div>
        </div>`
        }).join('')}
        <div>
            <p><pre>Legal     Safety&Privacy Center     Privacy Policy     Cookies</pre></p>
            <p><pre>About Ads     Accessibility</pre></p>
            <h4>Cookies</h4>
        </div>
        <div class="lang_div">
            <div><img src="./Images/lang_logo.png" alt=""><p>English</p></div>
        </div>
        </div>`;
}
document.body.innerHTML += sidebarFunction(sideContent);

var tileImg=[
    {
        name: "Pritam",
        profession: "Artist",
        image:"https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
    },{
        name: "Arijit Singh",
        profession: "Artist",
        image:"https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7"
    },{
        name: "A.R. Rahman",
        profession: "Artist",
        image:"https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c"
    },{
        name: "Sachin-Jigar",
        profession: "Artist",
        image:"https://i.scdn.co/image/ab676161000051748094cf9aa2f6ed775614c073"
    },{
        name: "Vishal-Shekhar",
        profession: "Artist",
        image:"https://i.scdn.co/image/ab6761610000517490b6c3d093f9b02aad628eaf"
    },{
        name: "Atif Aslam",
        profession: "Artist",
        image:"https://i.scdn.co/image/ab67616100005174c40600e02356cc86f0debe84"
    },{
        name: "Anirudh Ravichander",
        profession: "Artist",
        image:"https://i.scdn.co/image/ab676161000051740f0be2054fe9594026a6b843"
    },{
        name: "Vishal Mishra",
        profession: "Artist",
        image:"https://i.scdn.co/image/ab67616100005174fb13d10be20fdcb5a670f551"
    },{
        name: "Jasleen Royal",
        profession: "Artist",
        image:"https://i.scdn.co/image/ab67616100005174d65723b2f4cf4d47f62a9f89"
    }
];
var tileTwoImg=[
{
    name: "Glory",
    profession: "Yo Yo Honey Singh",
    image:"https://i.scdn.co/image/ab67616d00001e02aad3f4b601ae8763b3fc4e88"
},{
    name: "Aashiqui 2",
    profession: "Mithoon, Ankit Tiwari, Jeet Gaanguli",
    image:"https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3"
},{
    name: "Yeh Jawaani Hai Deewani",
    profession: "Pritam",
    image:"https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4"
},{
    name: "Who(Remixes)",
    profession: "Jimin",
    image:"https://i.scdn.co/image/ab67616d00001e027f35adfbec3bb2bc8256802b"
},{
    name: "Making Memories",
    profession: "Karan Aujla, Ikky",
    image:"https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36"
},{
    name: "Mismatched: Season 3 (Soundtrack from the Netflix Series)",
    profession: "Mismatched - Cast",
    image:"https://i.scdn.co/image/ab67616d00001e0279f4a87c23143f0abb14c279"
},{
    name: "Jo Tum Mere Ho",
    profession: "Anuv Jain",
    image:"https://i.scdn.co/image/ab67616d00001e0272a77d038887cdc425f5ee55"
},{
    name: "Sahiba",
    profession: "Jasleen Royal,Stebin Ben, Vijay DeveraKonda",
    image:"https://i.scdn.co/image/ab67616d00001e02b5e7944443cec785db91184b"
},{
    name: "Ultimate Love Songs - Arijit Singh",
    profession: "Arijit Singh",
    image:"https://i.scdn.co/image/ab67616d00001e021aa5adad8593923dcdf1a7d0"
}];
function getTiles(tileImg){
    return tileImg.map(function(tiles){
        return `
        <div class="tile">
            <div><img src="${tiles.image}" alt="${tiles.name}"></div>
            <p>${tiles.name}</p>
            <p>${tiles.profession}</p>
        </div>
        `;
    }).join('')
}
function mainFunction(tileImg,tileTwoImg){
        return `<div class="main">
            <div class="section1">
                <div class="top_corner">Popular artists</div>
                <div class="top_middle"></div>
                <div class="top_right">Show all</div>
                ${getTiles(tileImg)}
            </div>
            <div class="section1">
                <div class="top_corner">Popular albums and singles</div>
                <div class="top_middle"></div>
                <div class="top_right">Show all</div>
                ${tileTwoImg.map(function(tilesTwo){
                    return `
                    <div class="tile2">
                        <div><img src="${tilesTwo.image}" alt="${tilesTwo.name}"></div>
                        <p>${tilesTwo.name}</p>
                        <p>${tilesTwo.profession}</p>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>`;
}
document.body.innerHTML += mainFunction(tileImg,tileTwoImg);

function footerFunction(){
        return `
        <div class="footer">
                <div>
                <p>Preview of Spotify</p>
                <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                </div>
                <div>Sign up free</div>
        </div>`;
}
document.body.innerHTML += footerFunction();