import React from 'react';

export default function(props) {
  return (
    <div style={{background: 'rgba(200, 200, 200, 0.2)'}}>
      <h4>{ props.data.comment }</h4>
      <p>Posted By: { props.data.author }</p>
      <div style={{marginLeft: '45px'}}>
        { props.children }
      </div>
    </div>
  )
}