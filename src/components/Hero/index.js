import './index.scss';
import backgroundImage from '../../assets/hero.png'

const Hero = () => {
    return (
        <div id="hero" className="hero ">
            <div className='overlay'>
                <span />
                <img src={backgroundImage} />
            </div>
            <div className='container p-xxl'>
                <div className="content p-xxl">
                    <h2 className='m-0'>Diplomado en</h2>
                    <h2 className='bg-blue-pastel m-0 pl-xl pr-xl pt-base pb-base background-heading'>Instalaciones Eléctricas</h2>
                    <p>
                        Text: P1 - Lorem ipsum dolor sit amet consectetur adipiscing elit platea rhoncus lacinia, nunc laoreet ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <div className="bg-white p-xl br-base">
                    <h3 className='text-light-black'>Lorem ipsum dolor</h3>
                    <p>TextP1 Lorem ipsum dolor consectetur adipiscing elit platea rhoncus</p>
                    <form>
                        <label>
                            <input required type="text" placeholder='Fecha de nacimiento*' name="name" />
                        </label>
                        <input className='btn btn-pink-red' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero
