import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GitGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                    // categories.map( category => {
                    //     return <li key={ category }> { category } </li>
                    // })
                }
            </ol>
        </>
  )
}

