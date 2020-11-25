import React, { Fragment } from 'react'

function SearchPanel({ setSearchField }) {
    return (
        <Fragment>
            <input
                className="search-field"
                type="text"
                name="seacrh"
                id="seacrh"
                onChange={evt => {
                    setSearchField(evt.target.value)
                }}
                placeholder="Поиск по имени..."
                required>
            </input>
        </Fragment>
    )
}

export default SearchPanel
