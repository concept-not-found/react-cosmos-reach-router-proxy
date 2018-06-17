[react-cosmos](https://github.com/react-cosmos/react-cosmos) [@reach/router](https://github.com/reach/router) proxy
================================

### Usage in fixture
```js
{
  component: App,
  url: '/cat/5378358' // defaults to '/' if not provided. Fixture is always active
}
```
Make sure to use the installation instructions or else the react router proxy will be used.

### `createReachRouterProxy(basepath)` options
 * `basepath` optional string of basepath

### Installation
`cosmos.proxies.js`
```js
import createReachRouterProxy from 'react-cosmos-reach-router-proxy'

export default [
  createReachRouterProxy()
]
```
