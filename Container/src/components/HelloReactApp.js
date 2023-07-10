// container/src/components/HelloReactApp.js
import { mount } from '../../../helloReact/src/bootstrap'
import React, { useRef, useEffect } from 'react'

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    }, [])

    return <div ref={ref} />
}
