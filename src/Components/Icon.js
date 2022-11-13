import React from 'react';

function Icon({ name, color, ...otherProps }) {
    switch(name) {
        case 'add' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><rect fill={color} x="22" y="6" width="5" height="37"/><rect fill={color} x="22" y="6" width="5" height="37" transform="translate(0 49) rotate(-90)"/></svg>)
        case 'arrow_down' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="3.09 14.05 25 35.95 46.91 14.05 3.09 14.05"/></svg>)
        case 'arrow_left' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="32.8 3.59 10.89 25.5 32.8 47.41 32.8 3.59"/></svg>)
        case 'arrow_right' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="14.05 47.41 35.95 25.5 14.05 3.59 14.05 47.41"/></svg>)
        case 'arrow_up' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="46.95 35.95 25.05 14.05 3.14 35.95 46.95 35.95"/></svg>)
        case 'check' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><g><circle cx="25" cy="25" r="22.5" style={{fill:"#144a00"}}/><path d="M25,5c11.03,0,20,8.97,20,20s-8.97,20-20,20S5,36.03,5,25,13.97,5,25,5m0-5C11.19,0,0,11.19,0,25s11.19,25,25,25,25-11.19,25-25S38.81,0,25,0h0Z" style={{fill:"#012a00"}}/></g><g><g><rect x="15.33" y="28.37" width=".55" height="10.35" transform="translate(-19.15 20.86) rotate(-45)" style={{fill:"#144a00"}}/><polygon points="12.14 26.15 8.22 30.08 19.07 40.93 22.99 37.01 12.14 26.15 12.14 26.15" style={{fill:"#012a00"}}/></g><g><rect x="15.09" y="27.45" width="25.91" height=".55" transform="translate(-11.39 27.95) rotate(-45)" style={{fill:"#144a00"}}/><polygon points="37.01 14.83 15.16 36.69 19.08 40.61 40.94 18.76 37.01 14.83 37.01 14.83" style={{fill:"#012a00"}}/></g></g></svg>)
        case 'close' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><rect fill={color} x="22" y="6" width="5" height="37" transform="translate(-10.15 24.5) rotate(-45)"/><rect fill={color} x="22" y="6" width="5" height="37" transform="translate(24.5 59.15) rotate(-135)"/></svg>)
        case 'edit' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon  fill={color} points="29 13.19 11.66 31.2 8.35 43.29 20.31 39.53 37.65 21.52 29 13.19"/><rect fill={color} x="31.83" y="7.17" width="12" height="11" transform="translate(19.37 -22.7) rotate(43.91)"/></svg>)
        case 'error' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><g><circle cx="25" cy="25" r="22.5" style={{fill:"#c1272d"}}/><path d="M25,5c11.03,0,20,8.97,20,20s-8.97,20-20,20S5,36.03,5,25,13.97,5,25,5m0-5C11.19,0,0,11.19,0,25s11.19,25,25,25,25-11.19,25-25S38.81,0,25,0h0Z" style={{fill:"#3f0001"}} /></g><g><g><rect x="24.84" y="12.09" width=".55" height="25.91" transform="translate(-10.35 25.09) rotate(-45)" style={{fill:"#c1272d"}} /><polygon points="16.14 12.15 12.22 16.08 34.08 37.93 38 34.01 16.14 12.15 16.14 12.15" style={{fill:"#3f0001"}} /></g><g><rect x="12.09" y="24.45" width="25.91" height=".55" transform="translate(-10.15 24.95) rotate(-45)" style={{fill:"#c1272d"}}/><polygon points="34.01 11.83 12.16 33.69 16.08 37.61 37.94 15.76 34.01 11.83 34.01 11.83" style={{fill:"#3f0001"}} /></g></g></svg>)
        case 'home' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="47.78 28 25.87 6.09 3.97 28 47.78 28"/><g><rect x="11.5" y="29.5" width="28" height="14"/><path  fill={color} d="M37,32v9H14v-9h23m5-5H9v19H42V27h0Z"/></g><rect x="21" y="35" width="9" height="12" style={{fill:"#fff"}} /><rect fill={color} x="33.98" y="9.16" width="6.02" height="12"/></svg>)
        case 'info' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><g><circle cx="25" cy="25" r="22.5" style={{fill:"#003db4"}}/><path d="M25,5c11.03,0,20,8.97,20,20s-8.97,20-20,20S5,36.03,5,25,13.97,5,25,5m0-5C11.19,0,0,11.19,0,25s11.19,25,25,25,25-11.19,25-25S38.81,0,25,0h0Z" style={{fill:"#000b35"}} /></g><g><rect x="23.5" y="24.5" width="3" height="12" style={{fill:"#003db4"}}/><polygon points="29 22 21 22 21 39 29 39 29 22 29 22" style={{fill:"#000b35"}}/></g><g><circle cx="25" cy="15" r="2.5" style={{fill:"#003db4"}}/><path d="M25,15h0s0,0,0,0m0-5c-2.76,0-5,2.24-5,5s2.24,5,5,5,5-2.24,5-5-2.24-5-5-5h0Z" style={{fill:"#000b35"}}/></g><g><rect x="17" y="22" width="5" height="2" style={{fill:"#003db4"}}/><polygon points="22 22 17 22 17 24 22 24 22 22 22 22" style={{fill:"#000b35"}}/></g><g><rect x="19" y="38" width="13" height="1" style={{fill:"#003db4"}}/><polygon points="32 38 19 38 19 39 32 39 32 38 32 38" style={{fill:"#000b35"}}/></g></svg>)
        case 'link' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><rect x="21.02" y="2.71" width="15.22" height="28.38" rx="7.61" ry="7.61" transform="translate(18.53 -14.78) rotate(41.77)" style={{fill:"none", stroke:color, strokeMiterlimit:10, strokeWidth:"4px"}} /><rect x="15.73" y="19.33" width="15.22" height="28.38" rx="7.61" ry="7.61" transform="translate(28.26 -7.03) rotate(41.77)" style={{fill:"none", stroke:color, strokeMiterlimit:10, strokeWidth:"4px"}} /></svg>)
        case 'menu' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><rect fill={color} x="9" y="11" width="32" height="8.3"/><rect x="9" y="21.67" width="32" height="8.3"/><rect fill={color} x="9" y="32.33" width="32" height="8.3"/></svg>)
        case 'new_window' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><rect fill={color} x="20.81" y="18.65" width="19.91" height="2.7" transform="translate(-4.98 28.29) rotate(-46.09)"/><rect fill={color} x="11" y="38.27" width="28.64" height="2.73"/><rect fill={color} x="-1.95" y="23.95" width="28.64" height="2.73" transform="translate(-12.95 37.68) rotate(-90)"/><rect fill={color} x="11" y="11" width="15" height="2.73" transform="translate(37 24.73) rotate(180)"/><rect fill={color} x="30.61" y="31.3" width="15.32" height="2.73" transform="translate(70.93 -5.61) rotate(90)"/><rect fill={color} x="33.16" y="14.75" width="10.23" height="2.73" transform="translate(54.39 -22.16) rotate(90)"/><rect fill={color} x="30.09" y="11" width="9.55" height="2.73"/></svg>)
        case 'pointing_arrow_left' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="31 10 12 22.5 31 35 31 10"/><rect fill={color} x="28" y="20.5" width="44" height="4" transform="translate(100 45) rotate(180)"/></svg>)
        case 'pointing_arrow_right' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="53 35 72 22.5 53 10 53 35"/><rect  fill={color} x="12" y="20.5" width="44" height="4"/></svg>)
        case 'search' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><g><rect fill={color} x="28.91" y="27.89" width="2" height="17.41" transform="translate(-14.91 21.58) rotate(-32.22)" /><polygon fill={color} points="26.9 25.25 20.98 28.98 32.92 47.94 38.84 44.21 26.9 25.25 26.9 25.25"/></g><g><circle cx="18" cy="18" r="11.5" fill={color} /><path d="M18,9c4.96,0,9,4.04,9,9s-4.04,9-9,9-9-4.04-9-9,4.04-9,9-9m0-5c-7.73,0-14,6.27-14,14s6.27,14,14,14,14-6.27,14-14-6.27-14-14-14h0Z" fill={color}  /></g></svg>)
        case 'share' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><circle fill={color} cx="34.28" cy="13.63" r="7.63"/><circle fill={color} cx="15.63" cy="27.2" r="7.63"/><circle fill={color} cx="34.28" cy="37.37" r="7.63"/><rect fill={color} x="14.05" y="30.96" width="24.28" height="2.31" transform="translate(19.57 -8.79) rotate(30)"/><rect fill={color} x="12.35" y="19.09" width="24.28" height="2.31" transform="translate(-7.13 17.06) rotate(-33.82)"/></svg>)
        case 'trash' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><rect fill={color} x="12.98" y="9.76" width="27.02" height="5.24"/><rect fill={color} x="17.84" y="5" width="2.77" height="5"/><rect fill={color} x="31.69" y="5" width="2.77" height="5"/><rect fill={color} x="17.84" y="3" width="16.62" height="3.38"/><polygon points="13.77 16.5 17.9 46.5 35.33 46.5 39.45 16.5 13.77 16.5" fill={color}/></svg>)
        case 'user' :
            return(<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><g><circle fill={color} cx="25" cy="25" r="22.5" /><path fill={color} d="M25,5c11.03,0,20,8.97,20,20s-8.97,20-20,20S5,36.03,5,25,13.97,5,25,5m0-5C11.19,0,0,11.19,0,25s11.19,25,25,25,25-11.19,25-25S38.81,0,25,0h0Z"/></g><g><path d="M3.88,32.76c-.91-2.47-1.38-5.1-1.38-7.76C2.5,12.59,12.59,2.5,25,2.5s22.5,10.09,22.5,22.5c0,2.66-.47,5.29-1.38,7.76-5.18-6.42-12.94-10.26-21.12-10.26s-15.94,3.84-21.12,10.26Z" fill="#FFF"/><path fill={color} d="M25,5c11.03,0,20,8.97,20,20,0,.92-.06,1.84-.19,2.74-5.41-4.91-12.45-7.74-19.81-7.74s-14.4,2.84-19.81,7.74c-.13-.91-.19-1.82-.19-2.74C5,13.97,13.97,5,25,5M25,0C11.19,0,0,11.19,0,25c0,4.66,1.28,9.01,3.49,12.75,4.36-7.63,12.36-12.75,21.51-12.75s17.15,5.12,21.51,12.75c2.22-3.73,3.49-8.09,3.49-12.75C50,11.19,38.81,0,25,0h0Z"/></g><g><circle cx="25" cy="17" r="8.5" fill="{color}"/><path d="M25,11c3.31,0,6,2.69,6,6s-2.69,6-6,6-6-2.69-6-6,2.69-6,6-6m0-5c-6.08,0-11,4.92-11,11s4.92,11,11,11,11-4.92,11-11-4.92-11-11-11h0Z" fill={color}/></g></svg>)
        default :
        return (
            <div>
                Not an icon.
            </div>
        );
    }
    
}

export default Icon;