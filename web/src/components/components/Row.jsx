import React from "react";

function Row(props) {
    let propriedades = toString(props);
    let nospace = `${props.noSpace ? '' : 'gap-x-3 gap-y-3 mb-3'}`
    let col = props.col ? "grid-cols-"+props.col : '';
    let sm = props.sm ? "sm:grid-cols-"+props.sm : '';
    let md = props.md ? "md:grid-cols-"+props.md : '';
    let lg = props.lg ? "lg:grid-cols-"+props.lg : '';
    let xl = props.xl ? "xl:grid-cols-"+props.xl : '';
    let xl2 = props.xl2 ? "xl2:grid-cols-"+props.xl2 : '';
    let className = props.className ? props.className : '';
    // ${props.className ? `${props.className}` : ''}
    // ${props.sm ? `sm:grid-cols-${props.sm}` : ''}
    // ${props.md ? `md:grid-cols-${props.md}` : ''}
    // ${props.lg ? `lg:grid-cols-${props.lg}` : ''}
    // ${props.xl ? `xl:grid-cols-${props.xl}` : ''}
    // ${props.xl2 ? `2xl:grid-cols-${props.xl2}` : ''}
    // console.log(sting.toString().replace('\n', '').replace('\n', '').trim());
    return (
        // <div className={`grid ${className} ${col} ${sm} ${md} ${lg} ${xl} ${xl2} ${nospace}`.toString()}>
        // <div className="grid gap-x-3 gap-y-3 mb-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div className="flex flex-wrap gap-y-3 gap-x-3 mb-3">
            {props.children}
        </div>
    )
} export default Row