import { areaImg, numberImg, percentageImg, speedDistanceImg } from "../../assests"
import { CategoryCard, Navbar } from "../../Component"
import './Category.css'

const Category = () => {
    return(
        <main className="category_page">
        <Navbar />
        <h2 className="category_heading page-heading">Select one and start playing</h2>
            <section className="category_section">
                <CategoryCard 
                categoryImg={numberImg}
                categoryName='Numbers'
                />
                 <CategoryCard 
                categoryImg={percentageImg}
                categoryName='Percentage'
                />
                 <CategoryCard 
                categoryImg={areaImg}
                categoryName='Area'
                />
                 <CategoryCard 
                categoryImg={speedDistanceImg}
                categoryName='Speed and Distance'
                />
            </section>
    </main>
    )

}

export{Category}
