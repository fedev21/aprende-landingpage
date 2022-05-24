/**
 * External dependencies
 */
import React, {
    createContext,
    useReducer,
    useContext,
} from "react";

/**
 * Internal dependencies
 */

const getDefaultState = () => {

    const postsStorage = localStorage.getItem('aprende_posts');
    const postsLocalStorage = !!postsStorage ? JSON.parse(postsStorage) : []

    const categoriesStorage = localStorage.getItem('aprende_categories');
    const categoriesLocalStorage = !!categoriesStorage ? JSON.parse(categoriesStorage) : {}

    return {
        posts: postsLocalStorage,
        categories: categoriesLocalStorage
    };
};

const PostsContext = createContext({});

const usePostsContext = () => {
    return useContext(PostsContext);
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_POSTS": {
            localStorage.setItem('aprende_posts', JSON.stringify(action.payload))

            return {
                ...state,
                posts: action.payload
            };
        }
        case "SET_CATEGORIES": {
            const posts = action.payload;
            const categories = posts.reduce((acc, { taxonomy }) => {
                const masterClassCategory = taxonomy?.['master-class-category'];

                masterClassCategory.map(category => {
                    const { term_id, name } = category;

                    acc = {
                        ...acc,
                        [term_id]: name
                    };
                })

                return acc
            }, {})

            localStorage.setItem('aprende_categories', JSON.stringify(categories))

            return {
                ...state,
                categories: categories
            };
        }
        default:
            break;
    }
    return state;
};

const PostsProvider = (props) => {
    const { children } = props;

    const [state, dispatch] = useReducer(reducer, getDefaultState());

    const setCategories = (data) => {
        dispatch({
            type: "SET_CATEGORIES",
            payload: data
        });
    };
    const setPosts = (data) => {
        dispatch({
            type: "SET_POSTS",
            payload: data
        });

        setCategories(data);
    };



    return (
        <PostsContext.Provider
            value={{
                ...state,
                setPosts,
                setCategories
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};

const PostsConsumer = PostsContext.Consumer;

export { PostsProvider, PostsConsumer, usePostsContext };