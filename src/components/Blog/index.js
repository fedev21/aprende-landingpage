import { useState, useEffect, useMemo } from 'react';

import './index.scss';
import Card from './Card'
import CategoriesFilter from './CategoriesFilter'
import { usePostsContext } from '../../context';


const Blog = () => {

    const [perPage, setPerPage] = useState(4);
    const [selectedCategory, _setSelectedCategory] = useState('');

    const { posts, categories, setPosts } = usePostsContext();

    useEffect(() => {
        // fetch('https://qa.aprende.dev/wp-json/aprende/v1/ap-master-class?per_page=4?page=1').then((res) => {
        if (!posts || !posts?.length) {
            fetch('https://qa.aprende.dev/wp-json/aprende/v1/ap-master-class').then((res) => {
                return res.json();
            }).then((data) => {
                setPosts(data)
            })
        }
    }, []);

    const filteredPostsByCategories = useMemo(() => {
        var newPost = posts.slice();
        if (selectedCategory != '') {
            newPost = posts.filter((post) => {
                const { taxonomy } = post
                const masterClassCategory = taxonomy?.['master-class-category'];
                var filterPost = false;
                masterClassCategory.forEach(category => {
                    const { term_id } = category;
                    filterPost = term_id === selectedCategory
                });
                return filterPost
            })
        }
        return newPost;
    }, [posts, selectedCategory])

    const filteredPosts = useMemo(() => {
        var newPost = filteredPostsByCategories.slice();
        return newPost.splice(0, perPage);
    }, [filteredPostsByCategories, perPage])

    const verMas = () => {
        setPerPage(perPage + 4)
    }
    const setSelectedCategory = (value) => {
        _setSelectedCategory(value)
        setPerPage(4)
    }

    const hasMorePosts = filteredPostsByCategories?.length && filteredPostsByCategories.length > perPage;

    return (
        <div id="blog" className="blog container">
            <h3 className='text-dark-blue'>Explora todas nuestras Clases Magistrales</h3>
            <CategoriesFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <ul className={`posts-list aprende:grid mb-xxl ${hasMorePosts ? 'has-more-posts' : ''}`}>
                {filteredPosts.map((post, index) => {
                    return (<Card key={`post_${index}`} {...post} />)
                })}
            </ul>
            {hasMorePosts &&
                <button className='ver-mas-btn btn-outlined-pink-red text-pink-red mb-xxl' onClick={() => verMas()}>Ver más</button>
            }
        </div>
    )
}

export default Blog
