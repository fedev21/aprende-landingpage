import './index.scss';

const CategoriesFilter = (props) => {
    const {
        categories,
        selectedCategory,
        setSelectedCategory
    } = props

    const activeClasses = `text-white btn-dark-blue br-xl`
    const classes = `text-dark-blue btn-outlined-dark-blue br-xl`
    
    return (
        <ul className="taxonomy-list aprende:grid mt-xxl mb-xxl">
            {Boolean(Object.keys(categories)?.length) ?
                <>
                    <li onClick={() => setSelectedCategory('')} className={selectedCategory === '' ? activeClasses : classes}>Todas</li>
                    {Object.keys(categories).map((categoryKey, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                if (selectedCategory != Number(categoryKey)) {
                                    return setSelectedCategory(Number(categoryKey))
                                }

                                setSelectedCategory('')
                            }}
                            className={selectedCategory == categoryKey ? activeClasses : classes}
                        >
                            {categories[categoryKey]}
                        </li>
                    ))}

                </>
                :
                <li className={activeClasses}>Todas</li>
            }
        </ul>
    )
}

export default CategoriesFilter
