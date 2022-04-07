import React from 'react'

const MobileMenu = ({mobile, setMobile}) => {
    const [classes, setClasses] = React.useState(['mobile-icon'])
    function handleMobile() {
        setMobile(!mobile)
    }

    React.useEffect( () => {
        if (mobile) {
            setClasses( () => {
                return [...classes, 'active']
            })
        } else {
            setClasses( () => {
                return classes.filter( item => item !== 'active')
            })
        }
    },[mobile])

    return <div className={classes.join(' ')} onClick={handleMobile}>
        {(mobile)? <i className='fas fa-times close'></i> : <i className='fas fa-bars open'></i>}
    </div>
}

export default MobileMenu