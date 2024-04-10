import types from 'prop-types'
import {StyledTask} from './styles'

export function Task(props){

    return (
        <StyledTask>
            <p>{props.title}</p>
            <button onClick={() => props.onRemove(props.id)}>X</button>
        </StyledTask>
    )
}


Task.propTypes = {
    title : types.string.isRequired,
    id : types.number.isRequired
}

Task.defaultProps = {
    title: 'Valor default do título'
}