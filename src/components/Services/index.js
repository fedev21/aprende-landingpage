import './index.scss';
import Service from './Service'

const Services = () => {
    return (
        <div id="services" className="services bg-dark-blue pt-xxl pb-xxl">
            <div className="container" >
                <ul className="services aprende:grid bg-dark-blue">
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </ul>
            </div>
        </div>
    )
}

export default Services
