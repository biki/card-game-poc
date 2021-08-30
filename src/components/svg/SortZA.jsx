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
            <path d="M6 22l6-8H8V2H4v12H0l6 8zm18-11v2h-8v-1.984l.009-.012L21.095 4H16V2.007h7.985v1.887L18.667 11H24zm-4.946 4.011h1.586L23.014 22h-1.521l-.442-1.436H18.58L18.125 22h-1.466l2.395-6.989zm-.093 4.348h1.719l-.848-2.75-.871 2.75z" />
        </svg>
    )
}

export default SvgComponent
