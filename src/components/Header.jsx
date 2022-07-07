import PropTypes from 'prop-types'
import Boton from './Boton'

const Header = ({ titulo }) => {

    const onClick = () => {
        console.log('click desde parent')
    }

    return (
        <header className='header'>
            <h2> {titulo} </h2>
            <Boton color='green' text='Nueva' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    titulo: 'Danny'
}


Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

/*
const estilos = {
    color: 'red', background: 'black'
}
*/

export default Header