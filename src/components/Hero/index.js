import './index.scss';
import backgroundImage from '../../assets/hero.png'

const Hero = () => {
    return (
        <div className="hero bg-black">
            <div className="overlay" />
            <div className='container-md container-lg container-xl container-xxl aprende:grid'>
                <div className="contents md:col-6">
                    <div className="overlay" />
                    <div className='content container p-xxl'>
                        <div className="content p-xxl">
                            <h2 className='m-0 first-title'>Diplomado en</h2>
                            <div className="background-heading">
                                <h2 className='second-title bg-blue-pastel m-0 pl-xl pr-xl pt-base pb-base '>Instalaciones Eléctricas</h2>
                            </div>
                            <p>
                                Text: P1 - Lorem ipsum dolor sit amet consectetur adipiscing elit platea rhoncus lacinia, nunc laoreet ipsum dolor sit amet consectetur.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="form-box bg-white br-base text-light-black md:col-4">
                    <h3 className='ft-bold text-light-black m-0 mb-m'>Lorem ipsum dolor</h3>
                    <p className='m-0 mb-m'>TextP1 Lorem ipsum dolor consectetur adipiscing elit platea rhoncus</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label>
                            <input required type="text" placeholder='Nombre*' name="name" className='text-dark-gray br-base p-lg pr-0 pl-xxl' />
                        </label>
                        <label>
                            <input required type="text" placeholder='Apellido*' name="name" className='text-dark-gray br-base p-lg pr-0 pl-xxl' />
                        </label>
                        <label>
                            <input required type="text" placeholder='Correo electrónico*' name="name" className='text-dark-gray br-base p-lg pr-0 pl-xxl' />
                        </label>
                        <label>
                            <input required type="text" placeholder='Teléfono*' name="name" className='text-dark-gray br-base p-lg pr-0 pl-xxl' />
                        </label>
                        <label>
                            <select type="select" name="name" className='text-dark-gray br-base p-lg pr-0 pl-xxl' defaultValue="test">
                                <option value="test">Área de interés*</option>
                                <option value="value1">Value 1</option>
                                <option value="value2">Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </label>
                        <label>
                            <select type="select" name="name" className='text-dark-gray br-base p-lg pr-0 pl-xxl' defaultValue="test">
                                <option value="test">Ocupación</option>
                                <option value="value1">Value 1</option>
                                <option value="value2">Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </label>
                        <input className='btn-pink-red text-white pt-lg pb-lg' type="submit" value="Finalizar" />
                        <p className='font-sm lh-sm m-0'>Al compartir tu datos, aceptas nuestros <a href='#'>Términos de servicio y Política de privacidad</a></p>
                    </form>
                </div>
            </div >
        </div >

    )
}

export default Hero;
