import React from "react";
import Help from "./help";

const liStyle = {
    'display' : 'inline',
    'margin' : '2px',
    'padding' : '1px',
    // 'border' : '1px solid black',
    'border-radius' : '2px'
}

function Sidebar(){
    return(
        <div className="sidebar">
            <h3> Listings</h3>
            <div>
                <ul>
                    <li style={liStyle}><button> All</button></li>
                    <li style={liStyle}><button>Owner</button></li>
                    <li style={liStyle}><button>Dealer</button></li>
                </ul>
            </div>
            <div>
                <ul>
                    <label for="filter1">search titles only</label>
                    <li input type="checkbox" id="filter1" name="filter1" value="search titles only">search titles only</li>
                    <li>has image</li>
                    <li>posted today</li>
                    <li>bundle duplicates</li>
                    <li>include nearby arreas</li>
                </ul>
            </div>
            <div>
                <h4>MILES FROM ZIP</h4>
                {/* <input>miles</input><input>from zip</input> */}
            </div>
            <div>
                <h4>PRICE</h4>
                {/* <input>miles</input><input>from zip</input> */}
            </div>
            <div>
                <h4>MAKE AND MODEL</h4>
                {/* <input>miles</input><input>from zip</input> */}
            </div>
            <div>
                <ul>
                    <li>cryptocurrency ok</li>
                    <li>delivery available</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="*">language of posting</a></li>
                    <li><a href="*">condition</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li style={liStyle}><button> reset</button></li>
                    <li style={liStyle}><a href="*"><button>update search</button></a></li>
                </ul>
            </div>
            
            <Help></Help>
        </div>
    )
}

export default Sidebar