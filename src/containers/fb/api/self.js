import client, { withToken, URLS } from './http_client'

const get = async () => client.get(URLS.Self.Profile.Get)
const update = async () => client.put(URLS.Self.Profile.Update)
const remove = async () => client.delete(URLS.Self.Profile.Delete)
const updatePhoto = async () => client.put(URLS.Self.Profile.UpdatePhoto)

const follow = async (id) => client.post(URLS.Self.Follow(id))
const unfollow = async (id) => client.delete(URLS.Self.Unfollow(id))

const create = async (model) => client.post(URLS.Self.Posts.Create, model)
const attachPhoto = async (id, image) => client.put(URLS.Self.Posts.AttachPhoto(id))

export default {
    profile: {
        get,
        update,
        remove,
        updatePhoto
    },
    follow,
    unfollow,
    post: {
        create,
        attachPhoto
    }
}