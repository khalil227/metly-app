

const windDirection = [
    {direction : 'N', rotation: '0deg', opacity: {n: 1, e: 0.5, s: 0.5, w: 0.5}},
    {direction : 'NbE', rotation: '11.25deg', opacity: {n: 1, e: 1, s: 0.5, w: 0.5}},
    {direction : 'NNE', rotation: '22.5deg', opacity: {n: 1, e: 1, s: 0.5, w: 0.5}},
    {direction : 'NEbN', rotation: '33.75deg', opacity: {n: 1, e: 1, s: 0.5, w: 0.5}},
    {direction : 'NE', rotation: '45deg', opacity: {n: 1, e: 1, s: 0.5, w: 0.5}},
    {direction : 'NEbE', rotation: '56.25deg', opacity: {n: 1, e: 1, s: 0.5, w: 0.5}},
    {direction : 'ENE', rotation: '67.5deg', opacity: {n: 1, e: 1, s: 0.5, w: 0.5}},
    {direction : 'EbN', rotation: '78.75deg', opacity: {n: 1, e: 1, s: 0.5, w: 0.5}},
    {direction : 'E', rotation: '90deg', opacity: {n: 0.5, e: 1, s: 0.5, w: 0.5}},
    {direction : 'EbS', rotation: '101.25deg', opacity: {n: 0.5, e: 1, s: 1, w: 0.5}},
    {direction : 'ESE', rotation: '112.5deg', opacity: {n: 0.5, e: 1, s: 1, w: 0.5}},
    {direction : 'SEbE', rotation: '123.75deg', opacity: {n: 0.5, e: 1, s: 1, w: 0.5}},
    {direction : 'SE', rotation: '135deg', opacity: {n: 0.5, e: 1, s: 1, w: 0.5}},
    {direction : 'SEbS', rotation: '146.25deg', opacity: {n: 0.5, e: 1, s: 1, w: 0.5}},
    {direction : 'SSE', rotation: '157.5deg', opacity: {n: 0.5, e: 1, s: 1, w: 0.5}},
    {direction : 'SbE', rotation: '168.75deg', opacity: {n: 0.5, e: 1, s: 1, w: 0.5}},
    {direction : 'S', rotation: '180deg', opacity: {n: 0.5, e: 0.5, s: 1, w: 0.5}},
    {direction : 'SbW', rotation: '191.25deg', opacity: {n: 0.5, e: 0.5, s: 1, w: 1}},
    {direction : 'SSW', rotation: '202.25deg', opacity: {n: 0.5, e: 0.5, s: 1, w: 1}},
    {direction : 'SWbS', rotation: '213.75deg', opacity: {n: 0.5, e: 0.5, s: 1, w: 1}},
    {direction : 'SW', rotation: '225deg', opacity: {n: 0.5, e: 0.5, s: 1, w: 1}},
    {direction : 'SWbW', rotation: '236.25deg', opacity: {n: 0.5, e: 0.5, s: 1, w: 1}},
    {direction : 'WSW', rotation: '247.5deg', opacity: {n: 0.5, e: 0.5, s: 1, w: 1}},
    {direction : 'WbS', rotation: '258.75deg', opacity: {n: 0.5, e: 0.5, s: 1, w: 1}},
    {direction : 'W', rotation: '270deg', opacity: {n: 0.5, e: 0.5, s: 0.5, w: 1}},
    {direction : 'WbN', rotation: '281.25deg', opacity: {n: 1, e: 0.5, s: 0.5, w: 1}},
    {direction : 'WNW', rotation: '292.5deg', opacity: {n: 1, e: 0.5, s: 0.5, w: 1}},
    {direction : 'NWbW', rotation: '303.75deg', opacity: {n: 1, e: 0.5, s: 0.5, w: 1}},
    {direction : 'NW', rotation: '315deg', opacity: {n: 1, e: 0.5, s: 0.5, w: 1}},
    {direction : 'NWbN', rotation: '326.25deg', opacity: {n: 1, e: 0.5, s: 0.5, w: 1}},
    {direction : 'NNW', rotation: '337.5deg', opacity: {n: 1, e: 0.5, s: 0.5, w: 1}},
    {direction : 'NbW', rotation: '348.75deg', opacity: {n: 1, e: 0.5, s: 0.5, w: 1}},
];

export default windDirection;