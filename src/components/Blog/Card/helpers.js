export function ItemTitle(props) {

	const {
		tagName = 'h4',
		title
	} = props;

	const Tag = tagName;

	return (<Tag className='title text-light-black ft-regular font-d' dangerouslySetInnerHTML={{ __html: !!title?.rendered && title.rendered || 'Empty Title' }} />)
}

export function ItemFeaturedImage(props, size = "thumbnail") {

	const { meta } = props;

	const { thumbnail } = meta;

	const img = thumbnail.sizes["thumbnail"]

	return (
		<img loading="lazy" className="br-sm" src={img} />
	)
}

export function ItemReadMode(props) {

	const { link } = props;

	return (
		<a className="btn-pink-red text-white pt-lg pb-lg mb-xxl" target="_blank" href={link}>
			Ver clase
		</a>
	)
} 