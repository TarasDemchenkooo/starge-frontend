import Modal from '../../../shared/components/Modal/components/Modal'
import styles from './ConfirmModal.module.scss'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'
import SourceAsset from './SourceAsset'
import TargetAsset from './TargetAsset'
import { useEffect, useRef, useState } from 'react'
import ConfirmArrow from '../../../assets/svg/confirm-arrow.svg?react'
import classNames from 'classnames'
import toast from 'react-hot-toast'
import useSwap from '../hooks/useSwap'
import { IConfirmedSwap } from '../types/IConfirmedSwap'
import formatSourceInput from '../utils/formatSourceInput'
import payment from '../../../shared/constants/payment'
import { useNavigate } from 'react-router-dom'

export default function ConfirmModal({ data, setModalStatus }:
    { data: IConfirmedSwap, setModalStatus: (status: boolean) => void }) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isAnimating, setIsAnimating] = useState(false)
    const [isTextShowed, setIsTextShowed] = useState(true)
    const [isTextAnimating, setIsTextAnimating] = useState(false)
    const parentRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const { invoice, mutate, isPending, error } = useSwap()
    const [isLoading, setIsLoading] = useState(false)
    const [closeModal, setCloseModal] = useState(false)
    const [currentText, setCurrentText] = useState('Slide to confirm')
    const navigate = useNavigate()

    const buttonClassnames = classNames(styles.confirmModalSliderBtn, {
        [styles.confirmModalSliderBtnLoading]: isLoading
    })

    useEffect(() => {
        if (invoice?.invoiceLink) {
            Telegram.WebApp.openInvoice(invoice.invoiceLink, status => {
                if (status === 'paid') {
                    setIsLoading(false)
                    setCloseModal(true)
                    setTimeout(() => navigate('/history?poll=true', {}), 500)
                } else if (status === 'cancelled') {
                    setPosition({ x: 0, y: 0 })
                    setIsLoading(false)
                    setTimeout(() => {
                        setIsTextShowed(true)
                    }, 500)
                } else if (status === 'failed') {
                    toast.error('Price slippage exceeded')
                    setIsLoading(false)
                    setCloseModal(true)
                }
            })
        } else if (error) {
            toast.error(error.message)
            setIsLoading(false)
            setCloseModal(true)
        }

        const timeout = setInterval(() => {
            const bchFees = data.route === 'TON' ? payment.tonFees : payment.jettonFees
            const lpFee = Math.ceil(data.source * payment.comissionRate)
            const amount = formatSourceInput(String(data.source + lpFee + bchFees))

            setIsTextAnimating(true)
            setTimeout(() => {
                setCurrentText(prev => prev[0] === 'S' ? `~ ${amount} STARS` : 'Slide to confirm')
                setIsTextAnimating(false)
            }, 200)
        }, 4000)

        return () => clearInterval(timeout)
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
            mutate(data)
            setPosition({ x: parentWidth - elementWidth, y: dragData.y })
            clearTimeout(timeout)
            setIsLoading(true)
        }
    }

    return (
        <Modal closeRequest={closeModal} setModalStatus={setModalStatus}>
            <div className={styles.confirmModal}>
                <h3>Confirm swap</h3>
                <SourceAsset confirmedAmount={data.source} />
                <TargetAsset confirmedData={data} />
                <div ref={parentRef} className={styles.confirmModalSlider}>
                    <span style={{ opacity: isTextShowed && !isTextAnimating ? 0.5 : 0 }}>{currentText}</span>
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