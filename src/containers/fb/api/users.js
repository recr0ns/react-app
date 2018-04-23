import client, { URLS } from './http_client'

const get = async id => {
    if (id) {
        return client.get(URLS.Users.Get(id))
    }
    return client.get(URLS.Users.GetAll)
}

const followers = async id => client.get(URLS.Follow.Followers(id))
const followings = async id => client.get(URLS.Follow.Followings(id))

export default {
    get,
    followers,
    followings
}