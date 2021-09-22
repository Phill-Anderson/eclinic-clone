export function rotX({ rotate, x }) {
    return `rotate(${rotate}) translateX(${x})`
}
export function scaleButton({ }) {
    return 0;
}
export const fadeVariants = {
    start: {
        opacity: 0,
        x: '-100px',
    },
    animate: {
        opacity: 1,
        x: '0px',
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: 0.8
        }
    },
    hidden: {
        opacity: 0,
        x: '100px',
        transition: {
            type: 'spring',
            stiffness: 50,
        }
    }
}
export const slideUp = {
    start: {
        opacity: 0,
        y: '500px'
    },
    animate: {
        opacity: 1,
        y: '0px',
        transition: {
            type: 'spring',
            stiffness: 10,
            damping: 5,
            delay: 1
        }
    }
}
