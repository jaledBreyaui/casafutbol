export default function InfoContainer() {
    return (
        <div className="info-container">
            <Info icon={'pi pi-instagram'} text={'Compra a través Instagram'} />
            <Info icon={'pi pi-truck'} text={'Envíos gratis a todo el país'} />
            <Info icon={'pi pi-credit-card'} text={'MercadoPago o Transferencia'} />
        </div>
    )
}



function Info({ icon, text }) {
    return (
        <div className="info">
            <i className={icon} style={{ fontSize: '40px' }}></i>
            <p>
                <span>
                    {text}
                </span>
            </p>
        </div>
    )
}