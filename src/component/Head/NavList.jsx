import React from 'react'

const listMenu = ['home','features','portfolio','resume','clients','blog','contact']

const NavList = ({mobile, setMobile}) => {
    const [classes, setClasses] = React.useState(['navlist', 'dflex'])


    function handleMenu(event) {        
        setMobile(!mobile)
    }    
    React.useEffect( () => {
        function scrolling() {
            const navList = document.querySelector('.navlist')
            navList.classList.toggle('scrolling', window.scrollY > 50)
        }
        window.addEventListener('scroll', scrolling)
        if (mobile) {   //quando mobile for verdadeiro(true)
            setClasses( (classes) => {
                const scrol = classes.indexOf('scrolling')
                if ((window.scrollY > 50) && (scrol == -1)) {
                    return [...classes, 'scrolling', 'active']
                }
                return [...classes, 'active']
            })
        } else {    //quando mobile for false
            setClasses(() => {
                const scrol = classes.indexOf('scrolling')
                if ((window.scrollY > 50) && (scrol !== -1)) {
                    return classes.filter( item => {
                        return (item !== 'scrolling') && (item !== 'active')
                    })
                }
                if((window.scrollY < 50) && (scrol !== -1)){
                    return classes.filter( item => {
                        return (item !== 'active') && (item !== 'scrolling')
                    })
                }
                return classes.filter( item => item !== 'active')
            })
        }
        return () => window.removeEventListener('scroll', scrolling)
    },[mobile])

    return <ul className={classes.join(' ')}>
        {listMenu.map( (item) => {
            return <li key={item}>
                <a onClick={handleMenu} href={`#${item}`} className="capitalize">{item}</a>
            </li>
        })}
        <li><button className='btn_shadow uppercase'>Contact Now</button></li>
    </ul>
}

export default NavList