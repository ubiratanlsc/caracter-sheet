import React from "react";


function Row(props) {
    let propriedades = toString(props);
    console.log(props);
    return (
        <div className={`
        grid grid-cols-${props.col ?? 1}
        ${propriedades.noSpace ? '' : 'gap-x-3 gap-y-3 mb-3'}
        ${propriedades.sm ? `sm:grid-cols-${propriedades.sm}` : ''}
        ${propriedades.md ? `md:grid-cols-${propriedades.md}` : ''}
        ${propriedades.lg ? `lg:grid-cols-${propriedades.lg}` : ''}
        ${propriedades.xl ? `xl:grid-cols-${propriedades.xl}` : ''}
        ${propriedades.xl2 ? `2xl:grid-cols-${propriedades.xl2}` : ''}
        ${props.className}
        `}>
            {props.children}
        </div>
    )
} export default Row