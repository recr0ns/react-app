import axios from 'axios'

const client = axios.create({
    baseURL: 'https://social-webapi.azurewebsites.net/api/'
})

export const URLS = {
    Identity: {
        SignIn : 'identity/signin',
        SignUp: 'identity/signup'
    },
    Self: {
        Profile: {
            Get: 'users/me',
            Update: 'users/me',
            Delete: 'users/me',
            UpdatePhoto: `users/me/photo`
        },
        Follow: id => `users/me/followings/${id}`,
        Unfollow: id => `users/me/followings/${id}`,
        Posts: {
            Create: `$users/me/posts`,
            AttachPhoto: id => `users/me/posts/${id}/image`
        }
    },
    Users: {
        Get: (id) => `users/${id}`,
        GetAll: 'users'
    },
    Posts: {
        Feed: (userId) => `users/${userId}/feed`,
        Wall: (userId) => `users/${userId}/wall`
    },
    Follow: {
        Followings: userId => `users/${userId}/followings`,
        Followers: userId => `users/${userId}/followers`,
    }
}

export function setAuthToken(token) {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default client