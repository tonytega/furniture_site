import './SelectedCategory.css'

export const SelectedCategory =({categoryData})=>{
    return(
        <div className='categoryData'>
            {
                categoryData.map((item)=>(
                    <div key={item.name} className='item'>
                       <h2> {item.name} </h2>
                       <div className='image1_container'><img src={item.image1} className='image1'/></div>
                       <div className='smaller_image_container'>
                            <div className='image2_container'><img className='image2' src={item.image2}/></div>
                            <div className='image3_container'><img className='image3' src={item.image3}/></div>
                       </div>

                    </div>))
            }
        </div>
    )
}