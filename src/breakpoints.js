const size = {
    phone: '480px',
    tablet: '768px',
    desktop: '1240px'
}

const device = {
    portrait: `only screen and (max-width:${size.phone})`,
    landscape: `only screen and (min-width:${size.phone}) and (max-width:${size.tablet})`,
    phone: `only screen and (max-width:${size.tablet})`,
    tablet: `only screen and (min-width:${size.tablet}) and (max-width:${size.desktop})`,
    mobile: `only screen and (max-width:${size.desktop})`,
    desktop: `only screen and (min-width:${size.desktop})`
}

export default {device, size};