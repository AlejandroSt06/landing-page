import "../public/Slider.css"
function Slider(props) {


    return (
        <div className="slider mb-5">
            <div className="slide-track col">

                {props.businessImages.map((image) => (
             
                    <div className="slide">
                        <img src={image}></img>
                    </div>

                ))}
                {props.businessImages.map((image) => (
             
             <div className="slide">
                 <img src={image}></img>
             </div>

         ))}

            </div>
        </div>
    )

}
export default Slider