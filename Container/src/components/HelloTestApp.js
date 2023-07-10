import { mount } from '../../../helloTest/src/bootstrap'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export default () => {
  console.log('testing-app')
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current)
        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}