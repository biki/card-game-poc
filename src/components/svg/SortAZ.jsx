import * as React from 'react'

function SvgComponent(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}>
            <path d="M6 22l6-8H8V2H4v12H0l6 8zM17.694 2.003h2.525L24 13h-2.421l-.705-2.261h-3.935L16.216 13H13.88l3.814-10.997zm-.147 6.841h2.736l-1.35-4.326-1.386 4.326zm-.951 11.922l3.578-4.526h-3.487V15h5.304v1.173l-3.624 4.593H22V22h-5.404v-1.234z" />
        </svg>
    )
}

export default SvgComponent
