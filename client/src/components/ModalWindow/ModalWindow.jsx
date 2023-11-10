
import { Dialog } from 'primereact/dialog';



export default function ModalWindow({ showGuide, setShowGuide, content, header }) {


    return (
        <div>
            <div className="card flex justify-content-center">
                <Dialog header={header} visible={showGuide} onHide={() => setShowGuide(false)}>
                    {content}
                </Dialog>
            </div>
        </div>
    )
}

