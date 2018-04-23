import client, { URLS } from './http_client'

const feed = async id => client.get(URLS.Posts.Feed(id))
const wall = async id => client.get(URLS.Posts.Wall(id))

export default {
    feed,
    wall
}