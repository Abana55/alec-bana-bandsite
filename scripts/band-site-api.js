class BandSiteAPI {
    constructor(apiKey){
        this.baseURL = ('https://project-1-api.herokuapp.com/');
        this.apiKey = apiKey;
    }
    async getComments() {
        const url = `${this.baseURL}comments?api_key=${this.apiKey}`
        console.log(url)

        const response = await axios.get(url);

        const comments = response.data
        comments.sort((a,b)=> b.timestamp-a.timestamp)
        return comments;


    }
    async getShows() {
        const url = `${this.baseURL}showdates?api_key=${this.apiKey}`

        const response = await axios.get(url);

        const shows = response.data
        return shows;

    }
    async postComment(comment) {
        const url = `${this.baseURL}comments?api_key=${this.apiKey}`

        const response = await axios.post(url, comment);

    }
}