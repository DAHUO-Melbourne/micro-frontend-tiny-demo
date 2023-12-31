import { mount } from '../../../helloReact/src/bootstrap'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export default () => {
    console.log('home');
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current)
        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}