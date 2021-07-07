const size = {
    tablet: '768px',
    desktop: '1240px'
}

const device = {
    phone: `only screen and (max-width:${size.tablet})`,
    tablet: `only screen and (min-width:${size.tablet})`,
    desktop: `only screen and (min-width:${size.desktop})`
}

export default {device, size};