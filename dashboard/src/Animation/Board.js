import React, {useState} from 'react';
import Line from './components/Line';
import classes from './Animation.module.css';

export default function Board() {

    const coordinates = [];
    const [coordinatesValue,setCoordinates] = useState(false);

    for(let x = 0; x <= 20; x++) {
        for(let y = 0; y<= 50; y++) {
            coordinates.push(
                <circle cx = {y*40} cy={x*40} r ="3">
                    <title>{`${y*40},${x*40}`}</title>
                </circle>
            );
        }
    }

    return(
        <div>

            <input type="checkbox" id="coordinates" name="coordinates" value = {coordinatesValue}
            onChange={() => setCoordinates(!coordinatesValue)}/>
            <label for="coordinates"> Show Coordinates</label>
            
            <svg className = "bg-gray-400 w-full" height="520">
                <text x="15" y="30" fill="#222831"> SVG Canvas Location</text>

                <Line pathString = "M0 40 H230"/>
                <circle cx="240" cy="40" r="10" className = {classes.circle} />
                
                <Line pathString = "M0 80 H240 V190"/>
                <circle cx="240" cy="200" r="10" className = {classes.circle} />
                
                <Line pathString = "M0 120 H200 V190"/>
                <circle cx="200" cy="200" r="10" className = {classes.circle} />
                
                <Line pathString = "M0 160 H150"/>
                <circle cx="160" cy="160" r="10" className = {classes.circle} />
                
                <Line pathString = "M280 0 V190"/>
                <circle cx="280" cy="200" r="10" className = {classes.circle} />

                <Line pathString = "M320 0 V160 L352 192"/>
                <circle cx="360" cy="200" r="10" className = {classes.circle} />

                <Line pathString = "M360 0 V150"/>
                <circle cx="360" cy="160" r="10" className = {classes.circle} />

                <Line pathString = "M400 0 V200 L360 240 L328 208"/>
                <circle cx="320" cy="200" r="10" className = {classes.circle} />

                <Line pathString = "M440 0 V40 H520 L560 80 V150"/>
                <circle cx="560" cy="160" r="10" className = {classes.circle} />

                <circle cx="440" cy="80" r="10" className = {classes.circle} />
                <Line pathString = "M450 80 H520 V160 H440 V120 H470"/>
                <circle cx="480" cy="120" r="10" className = {classes.circle} />

                <Line pathString = "M560 0 V40 H600 V200 H530"/>
                <circle cx="520" cy="200" r="10" className = {classes.circle} />

                <Line pathString = "M640 0 V160 H680 V50"/>
                <circle cx="680" cy="40" r="10" className = {classes.circle} />

                <Line pathString = "M640 200 H720 V50"/>
                <circle cx="720" cy="40" r="10" className = {classes.circle} />

                <Line pathString = "M440 200 V470"/>
                <circle cx="440" cy="480" r="10" className = {classes.circle} />

                <Line pathString = "M480 200 V240 H750"/>
                <circle cx="760" cy="240" r="10" className = {classes.circle} />

                <circle cx="480" cy="280" r="10" className = {classes.circle} />
                <Line pathString = "M490 280 H750"/>
                <circle cx="760" cy="280" r="10" className = {classes.circle} />

                <circle cx="520" cy="320" r="10" className = {classes.circle} />
                <Line pathString = "M530 320 H710"/>
                <circle cx="720" cy="320" r="10" className = {classes.circle} />
        
                <circle cx="520" cy="360" r="10" className = {classes.circle} />
                <Line pathString = "M530 360 H710"/>
                <circle cx="720" cy="360" r="10" className = {classes.circle} />

                <circle cx="480" cy="400" r="10" className = {classes.circle} />
                <Line pathString = "M490 400 H750"/>
                <circle cx="760" cy="400" r="10" className = {classes.circle} />

                <Line pathString = "M440 520 L520 440 H720 L800 520"/>
                <Line pathString = "M480 520 L520 480 H720 L760 520"/>

                <Line pathString = "M160 200 H40 L0 240 L40 280 H110"/>
                <circle cx="120" cy="280" r="10" className = {classes.circle} />
                
                <circle cx="40" cy="240" r="10" className = {classes.circle} />
                <Line pathString = "M0 320 H120 L160 280 L120 240 H50"/>

                <Line pathString = "M200 280 H360 L392 312"/>
                <circle cx="400" cy="320" r="10" className = {classes.circle} />

                <circle cx="400" cy="360" r="10" className = {classes.circle} />
                <Line pathString = "M200 400 H360 L392 368"/>

                <Line pathString = "M360 360 H200 L168 392"/>
                <circle cx="160" cy="400" r="10" className = {classes.circle} />

                <Line pathString = "M360 320 H160 L128 352"/>
                <circle cx="120" cy="360" r="10" className = {classes.circle} />

                <circle cx="160" cy="360" r="10" className = {classes.circle} />
                <Line pathString = "M120 520 V400 L152 368"/>

                <circle cx="240" cy="240" r="10" className = {classes.circle} />
                <Line pathString = "M160 240 H230"/>
                <Line pathString = "M320 240 H250"/>

                <Line pathString = "M0 360 H80 L40 400 V470"/>
                <circle cx="40" cy="480" r="10" className = {classes.circle} />

                <Line pathString = "M80 520 V410"/>
                <circle cx="80" cy="400" r="10" className = {classes.circle} />

                <circle cx="280" cy="480" r="10" className = {classes.circle} />
                <Line pathString = "M160 520 L200 480 H270"/>
                <Line pathString = "M400 520 L360 480 H290"/>
                <Line pathString = "M280 440 H200 L160 480 H270"/>
                <Line pathString = "M280 440 H360 L400 480 H290"/>

                { 
                   coordinatesValue ? coordinates : null
                }
            </svg>
        </div>
    )
}