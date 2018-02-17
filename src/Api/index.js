import axios from 'axios'

const url = {
    cbc: "https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=25ccc48862834ff6b52e5a6aff987063"
}

export const getCbcNews = () => {
    return axios({
        method: "GET",
        url: url.cbc
    })
    .then(res => res.data)
}

export const getSearchNews = (params) => {
    return axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${params}&from=2018-02-15&to=2018-02-15&sortBy=popularity&apiKey=25ccc48862834ff6b52e5a6aff987063`
    })
    .then(res => res.data)
}

