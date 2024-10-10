import ReactDOM from "react-dom"
import { IModal } from "../types/IModal"
import classNames from "classnames"
import styles from './Modal.module.scss'
import { useEffect, useState } from "react"
import CloseIcon from '../../../../assets/svg/close.svg?react'
import vibrate from "../../../../utils/vibration"

export default function Modal({ setModalStatus, children, closeRequest }: IModal) {
    const [isActive, setIsActive] = useState(false)

    const modalClassnames = classNames({
        [styles.modal]: true,
        [styles.modalActive]: isActive
    })

    const modalContentClassnames = classNames({
        [styles.modalContent]: true,
        [styles.modalContentActive]: isActive
    })

    useEffect(() => {
        setIsActive(true)
        document.body.style.overflow = 'hidden'

        if (closeRequest) {
            closeModal()
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [closeRequest])

    function closeModal(event?: React.MouseEvent) {
        event && vibrate('medium')
        setIsActive(false)
        setTimeout(() => {
            setModalStatus(false)
        }, 300)
    }

    function backgroundClose(event: React.MouseEvent) {
        if (event.currentTarget === event.target) {
            closeModal()
        }
    }

    return (
        ReactDOM.createPortal(
            (
                <div onTouchStart={event => event.stopPropagation()}
                    className={modalClassnames} onClick={backgroundClose}>
                    <div className={modalContentClassnames}>
                        {children}
                        <button onClick={closeModal}>
                            <CloseIcon />
                        </button>
                    </div>
                </div>
            ), document.getElementById('modal-root')!)
    )
}
