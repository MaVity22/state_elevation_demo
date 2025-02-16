import React from 'react';
// Probado carga a GitHub
 
const FilteredList = ({ filter, items }) => items
    .map((item, i) => {
        const start = item.indexOf(filter);
        const end = start + filter.length; 
        console.log(item, i);
        return (
            <p key={i}>
                {item.slice(0, start)}
                <em>{item.slice(start, end)}</em>
                {item.slice(end)}
            </p>
        );
    }
)
 
export default FilteredList;