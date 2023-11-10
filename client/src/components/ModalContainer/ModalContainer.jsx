import ModalWindow from "../ModalWindow/ModalWindow"
import "./Modal.css"

export default function ModalContainer({ showGuide, setShowGuide, content, header, icon }) {
    return (
        <div className="modal-container">
            <p onClick={() => setShowGuide(true)}>{header} </p><i onClick={() => setShowGuide(true)} className={icon} style={{ fontSize: '15px' }}></i>
            <ModalWindow
                setShowGuide={setShowGuide}
                showGuide={showGuide}
                header={header}
                content={content} />
        </div>
    )
}
