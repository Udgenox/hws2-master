import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '147px',
                color: '#00CC22',
                padding: 0,
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: '#fff',
                    border: '3px solid #00CC22',
                    marginLeft: '-9px',
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0 0 0 8px rgba(0, 102, 204, 0.16)',
                    },
                    '&.Mui-active': {
                        boxShadow: '0 0 0 14px rgba(0, 102, 204, 0.16)',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: 6,
                        height: 6,
                        backgroundColor: '#00CC22',
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                },
                '& .MuiSlider-track': {
                    height: 6,
                    borderRadius: 3,
                    border: 'none',
                },
                '& .MuiSlider-rail': {
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: '#D9D9D9',
                },
                '& .MuiSlider-valueLabel': {
                    fontSize: 12,
                    fontWeight: 500,
                    backgroundColor: '#0066CC',
                    borderRadius: 4,
                    padding: '2px 6px',
                    '&::before': {
                        display: 'none',
                    },
                },
            }}
            {...props}
        />
    )
}

export default SuperRange