import React from 'react'
import LeftCard from './LeftCard';

function LeftSideBlock() {
  return (
    <>
        <div className="row">
            <div className="col-6">
                <LeftCard title="Just add your desired image size (width & height) after our URL, and you'll get a random image." />
            </div>
            <div className="col-6">
                <LeftCard title="Block2" />
            </div>
        </div>

        {/* second row */}
        <div className="row">
            <div className="col-6">
                <LeftCard title="Ad will display here...." />
            </div>
            <div className="col-6">
                <LeftCard title="Block4" />
            </div>
        </div>
    </>
  )
}

export default LeftSideBlock;
