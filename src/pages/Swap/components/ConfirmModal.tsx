import Modal from '../../../shared/components/Modal/components/Modal'
import { IValidatedSwap } from '../types/IValidatedSwap'
import styles from './ConfirmModal.module.scss'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'
import SourceAsset from './SourceAsset'
import TargetAsset from './TargetAsset'
import { useEffect, useRef, useState } from 'react'
import ConfirmArrow from '../../../assets/svg/confirm-arrow.svg?react'
import useInvoiceLink from '../hooks/useInvoiceLink'
import classNames from 'classnames'
import toast from 'react-hot-toast'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function ConfirmModal({ data, setModalStatus }:
    { data: IValidatedSwap, setModalStatus: (status: boolean) => void }) {
    const { refetch } = useAuth()
    const navigate = useNavigate()
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isAnimating, setIsAnimating] = useState(false)
    const [isTextShowed, setIsTextShowed] = useState(true)
    const parentRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const { invoice, mutate, isPending, error } = useInvoiceLink()
    const [isLoading, setIsLoading] = useState(false)
    const [closeModal, setCloseModal] = useState(false)

    const buttonClassnames = classNames(styles.confirmModalSliderBtn, {
        [styles.confirmModalSliderBtnLoading]: isLoading
    })

    useEffect(() => {
        if (invoice?.invoiceLink) {
            Telegram.WebApp.openInvoice(invoice.invoiceLink, status => {
                if (status === 'paid') {
                    refetch().finally(() => {
                        setCloseModal(true)
                        setIsLoading(false)
                        setTimeout(() => {
                            navigate('/history')
                        }, 500)
                    })
                } else if (status === 'cancelled') {
                    setPosition({ x: 0, y: 0 })
                    setIsLoading(false)
                    setTimeout(() => {
                        setIsTextShowed(true)
                    }, 500)
                } else if (status === 'failed') {
                    toast.error('Internal server error')
                    setCloseModal(true)
                    setIsLoading(false)
                }
            })
        } else if (error) {
            toast.error(error.message)
            setCloseModal(true)
            setIsLoading(false)
        }
    }, [isPending])

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

        if (progress < parentWidth * 0.8) {
            setPosition({ x: 0, y: dragData.y })
        } else {
            mutate(data.hash)
            setPosition({ x: parentWidth - elementWidth, y: dragData.y })
            clearTimeout(timeout)
            setIsLoading(true)
        }
    }

    return (
        <Modal closeRequest={closeModal} setModalStatus={setModalStatus}>
            <div className={styles.confirmModal}>
                <h3>Confirm swap</h3>
                <SourceAsset confirmedAmount={data.starsAmount} />
                <TargetAsset confirmedData={data} />
                <div ref={parentRef} className={styles.confirmModalSlider}>
                    <span style={{ opacity: isTextShowed ? 0.5 : 0 }}>Slide to confirm</span>
                    <Draggable position={position} onDrag={handleStart}
                        onStop={handleStop} bounds='parent' axis='x'>
                        <button className={buttonClassnames} ref={buttonRef} style={
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