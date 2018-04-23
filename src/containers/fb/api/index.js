import { setAuthToken, clearAuthToken } from './http_client'
import identity from './identity'
import self from './self'
import users from './users'
import posts from './posts'

const fetchProfile = async (id) => {
    const [profile, followers, followings, feed, wall] = await Promise.all([
        users.get(id),
        users.followers(id),
        users.followings(id),
        posts.feed(id),
        posts.wall(id)])
    return {
        profile: profile.data,
        followers: followers.data,
        followings: followings.data,
        feed: feed.data,
        wall: wall.data
    }
} 

export default {
    setAuthToken,
    clearAuthToken,
    Identity : identity,
    self,
    users,
    posts,
    fetchProfile: (id) => fetchProfile(id)
}