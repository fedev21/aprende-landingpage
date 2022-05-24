import './index.scss';
import icon from '../../../assets/icon.png'

const Service = ({ tagName = 'li' }) => {

    const Tag = tagName;

    return (
        <Tag className="service md:col-4 pt-xl pb-xl"><img src={icon} />
            <div>
                <h4 className='m-0 ft-bold mb-m'>Title: P1 - Lorem ipsum dolor sit</h4>
                <p className='text-dark-gray m-0 font-14 lh-20'>TextP2 - Lorem ipsum dolor sit amet consectetur adipiscing elit platea rhoncus lacinia, nunc laoreet</p>
            </div>
        </Tag>
    )
}

export default Service
