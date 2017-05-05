import store from '../middlewares/getStore'
import {
  updateUserLoginState
} from '../../client/common/actions/actions'

async function signIn(ctx) {
  const body = ctx.request.body
  if (body.username == "18227665407" && body.password == "111111") {
    const loginInfo = {
      "userID": "123123123123",
      "userAvatar": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3895318699,2089565216&fm=23&gp=0.jpg",
      "loginState": true
    }
    await store.dispatch(updateUserLoginState(loginInfo))
    ctx.redirect('/')
    return;
  }
}

export default { signIn }
