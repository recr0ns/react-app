import client, { URLS } from './http_client'

const SignIn = async (model) => client.post(URLS.Identity.SignIn, model)
const SignUp = async (model) => client.post(URLS.Identity.SignUp, model)

export default {
    SignIn,
    SignUp
}