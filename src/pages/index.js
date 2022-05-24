/**
 * Internal dependencies
 */
import { Header, Hero, Services, Blog, Footer } from '../components'
import { PostsProvider } from '../context';

function App() {

    return (
        <div className="App">
            <Header />
            <Hero />
            <main>
                <Services />
                <PostsProvider>
                    <Blog />
                </PostsProvider>
            </main>
            <Footer />
        </div >
    );
}

export default App;
