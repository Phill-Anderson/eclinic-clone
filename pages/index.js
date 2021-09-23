
import Layout from "../components/Layout"
import Section1 from "../components/Section1"
import Slider from "../components/Slider"
export default function Home() {


  return (
    <Layout title="Нүүр">
      <div className="bg-slider-image">
        <Slider />
      </div>
      <Section1 />
    </Layout>
  )
}
