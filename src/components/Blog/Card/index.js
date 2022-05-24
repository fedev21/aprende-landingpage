import './index.scss';
import {
    ItemTitle,
    ItemFeaturedImage,
    ItemReadMode
} from './helpers';

const Card = (props) => {
    const {
        tagName = 'li'
    } = props

    const Tag = tagName

    return (
        <Tag id="card" className="card br-m lg:col-3">
            <ItemFeaturedImage {...props} />
            <ItemTitle {...props} />
            <ItemReadMode {...props} />
        </Tag>
    )
}

export default Card
