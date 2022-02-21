import React from 'react'

function LeftCard(props) {
  return (
    <>
        <div className="card my-3 left-card" style={{height: "167px"}}>
            <div className="card-body" style={{overflow: "auto"}}>
                <div className="h5-heading">
                    <h5>{props.title}</h5>
                </div>
            </div>
        </div>
    </>
  )
}

export default LeftCard;
