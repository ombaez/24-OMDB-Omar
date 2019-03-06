import React from 'react'

export default (props) => {
    console.log(props)
    return (
        <div>
            <form onSubmit={props.onSubmit} >
                <input
                    type='text'
                    name='titulo'
                    placeholder='Busca el titulo'
                    onChange={props.onChange}
                />
                <button type='submit' >BUSCAR!</button>
            </form>
        </div>
    )
}