import React from 'react'
import Post from './Post';


function RightSideBlock() {
  return (
    <>
        <div className="main-heading">
            <h3>All Posts</h3>
        </div>
        <div className="row mb-2">
            <div className="col-12">
                <Post />
            </div>
        </div>
    </>
  )
}

export default RightSideBlock;
