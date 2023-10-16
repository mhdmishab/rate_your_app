import * as React from 'react';

const customIcons = {
    1: {
        label: 'Very Bad',
        color:"red"
    },
    2: {
        label: ' Bad',
        color:'red'
    },
    3: {
        label: 'Not Good',
        color:'red'
    },
    4: {
        label: 'Okay',
        color:'yellow'
    },
    5: {
        label: 'Good',
        color:'yellow'
    },
    6: {
        label: 'Very Good',
        color:'yellow'
    },
    7: {
        color: "orange",
        label: 'Excellent',
    },
    8: {
        label: 'Outstanding',
        color: "orange",
    },
    9: {
        label: 'Exceptional',
        color: "orange",
    },
    10: {
        
        label: 'Perfect',
        color: "purple",
    },

};

function UserRating({ rating, setRating }) {
    const [color, setColor] = React.useState(null)
    const handleChange = (event) => {
        
        setColor(customIcons[event.target.value]?.color)
        setRating(customIcons[event.target.value]?.label);
    }
    return (
        <>
            <div className='flex-col mt-2'>
                <div className='flex justify-between m-1'>
                    <h5>Rate us</h5>{rating ? <p className="font-semibold" style={{ color: color }}>{rating==='Perfect'?rating+'💖':rating}</p> : <p></p>}
                </div>
               
                <input
                    type="range"
                    min={1}
                    max={10}
                    style={{ width: '300px'}}
                    className={`range range-sm range-accent`}
                    step={1}
                    onChange={handleChange}
                />

                <div className="w-full flex justify-between text-xs px-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((step) => (
                        <span key={step}>{step}</span>
                    ))}
                </div>
            </div>

        </>

    );
}

export default UserRating
