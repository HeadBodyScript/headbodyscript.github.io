const youtubeKey = 'AIzaSyD6Twf3IrJNQ3Ffc58IJxUMXxdImkJbQXM';
const youtubeUser = 'UCqYWhYvSGTLO0L-VIPpywPQ';
const getYouTubesubs = document.getElementById('getYouTubesubs');
const getYouTubeviews = document.getElementById('getYouTubeviews');

let getSubscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        getYouTubesubs.innerHTML = data["items"][0].statistics.subscriberCount;
        getYouTubeviews.innerHTML = data["items"][0].statistics.viewCount;
    })
      .catch(error => console.log('error', error));
}

getSubscribers();
