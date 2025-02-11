import React from 'react'

function Book(props) {
    const b = props.book;
  return (
      <div>
          <h4>{b.title}</h4>
          <p>{b.author}</p>
          <p>{b.pages}</p>
      </div>
  )
}

export default Book