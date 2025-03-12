import './Section.css';
import Banner from './banner/Banner';
import Content from './content/Content';

function Section () {
return (
   <section className="main">
    <div className="container">
        
<Content/>
<Banner/>
    </div>
  </section>

)
}
export default Section;