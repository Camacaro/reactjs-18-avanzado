
import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

 
export const ListOfCategories = () => {
    return (
        <List>
            {
                categories.map( category => 
                
                    <Item key={category.id}> 

                        {/* <Category cover={category.cover} emoji={category.emoji} />  */}
                        <Category {...category} /> 
                    
                    </Item>
                )
            }
        </List>
    )
}