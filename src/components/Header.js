// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
            {/* <Button color='blue' text='Hello 2'/>
            <Button color='red' text='Hello 3'/> */}
        </header>
    )
}

// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

Header.defaultProps ={
    title: 'Task Tracker',
}

// class App extends React.Component {
//     render() {
//         return <h1>Hello from a class</h1>
//     }
// }

Header.propTypes = {
    title:PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header
