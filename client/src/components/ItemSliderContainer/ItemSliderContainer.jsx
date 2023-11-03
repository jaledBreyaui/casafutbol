import ItemSlider from "../ItemSlider/ItemSlider"



export default function ItemSliderContainer({ sectionName, products }) {

    return (
        <div className="itemSliderContainer">
            <ItemSlider section={sectionName ? sectionName : ""} products={products} />
        </div>
    )
}
