import header from '../header/header'
import coin from '../coin/coin'
import order from '../order/order'
import othersAdmin from '../othersAdmin/othersAdmin'
import user from '../user/user'
import storeAdmin from '../storeAdmin/storeAdmin'
const Home = (resolve) => {
  import('@/components/home/home').then((module) => {
    resolve(module)
  })
}
const defaultHome = []
const home = [{
  path: '/home',
  component: Home,
  name: 'home',
  children: [...defaultHome, ...header, ...order, ...coin, ...user, ...othersAdmin, ...storeAdmin]
}]
export default home
