import { motion } from 'framer-motion'
import { IWrapper } from '../../types/IWrapper'

export default function Wrapper({ children, animation }: IWrapper) {
    const animations = {
        in: {
            initial: { scale: 1, opacity: 1 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 1.2, opacity: 0 }
        },
        out: {
            initial: { scale: 1.2, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { opacity: 1 }
        }
    }


    return (
        <motion.div
            variants={animations[animation]}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0'
            }}>
            {children}
        </motion.div>
    )
}