import React from 'react'
import {ServerLocation} from '@reach/router'

export default (basepath) => {
  function addBasepath (url) {
    if (!basepath) {
      return url
    }
    if (!basepath.endsWith('/')) {
      basepath = `${basepath}/`
    }
    return `${basepath}${url}`
  }
  return (props) => {
    const {nextProxy, ...rest} = props
    const {value: NextProxy, next} = nextProxy
    const {fixture: {url = '/'}} = rest

    return <ServerLocation url={addBasepath(url)}>
      <NextProxy {...rest} nextProxy={next()} />
    </ServerLocation>
  }
}
