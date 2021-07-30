// import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
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

export default Header
