import Modal from '../../../shared/components/Modal/components/Modal'
import { IValidatedSwap } from '../types/IValidatedSwap'
import styles from './ConfirmModal.module.scss'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'
import SourceAsset from './SourceAsset'
import TargetAsset from './TargetAsset'
import { useRef, useState } from 'react'
import ConfirmArrow from '../../../assets/svg/confirm-arrow.svg?react'

export default function ConfirmModal({ data, setModalStatus }:
    { data: IValidatedSwap, setModalStatus: (status: boolean) => void }) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isAnimating, setIsAnimating] = useState(false)
    const [isTextShowed, setIsTextShowed] = useState(true)
    const parentRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    function handleStart(_: DraggableEvent, dragData: DraggableData) {
        setIsAnimating(false)
        setIsTextShowed(false)
        setPosition({ x: dragData.x, y: dragData.y })
    }

    function handleStop(_: DraggableEvent, dragData: DraggableData) {
        const elementWidth = buttonRef.current?.offsetWidth!
        const parentWidth = parentRef.current?.offsetWidth!
        const progress = dragData.x + elementWidth

        setIsAnimating(true)
        const timeout = setTimeout(() => {
            setIsTextShowed(true)
        }, 500)

        if (progress < parentWidth * 0.9) {
            setPosition({ x: 0, y: dragData.y })
        } else {
            setPosition({ x: parentWidth - elementWidth, y: dragData.y })
            clearTimeout(timeout)
        }
    }

    return (
        <Modal setModalStatus={setModalStatus}>
            <div className={styles.confirmModal}>
                <h3>Confirm swap</h3>
                <SourceAsset confirmedAmount={data.starsAmount} />
                <TargetAsset confirmedData={data} />
                <div ref={parentRef} className={styles.confirmModalSlider}>
                    <span style={{ opacity: isTextShowed ? 0.5 : 0 }}>Slide to confirm</span>
                    <Draggable position={position} onDrag={handleStart}
                        onStop={handleStop} bounds='parent' axis='x'>
                        <button ref={buttonRef} style={
                            { transition: isAnimating ? 'transform 0.3s ease-in-out' : 'none' }
                        }>
                            <ConfirmArrow />
                        </button>
                    </Draggable>
                </div>
            </div>
        </Modal>
    )
}