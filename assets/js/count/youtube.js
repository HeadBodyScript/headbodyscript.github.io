const youtubeKey = 'AIzaSyD6Twf3IrJNQ3Ffc58IJxUMXxdImkJbQXM';
const youtubeUser = 'UCqYWhYvSGTLO0L-VIPpywPQ';
const getYouTube = document.getElementById('getYouTube');

let getSubscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        getYouTube.innerHTML = data["items"][0].statistics.subscriberCount;
    })

}

getSubscribers();