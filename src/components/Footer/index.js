import './index.scss';
import { tiktok, linkedin, instagram, facebook } from './icons'

function Footer() {
    return (
        <footer className='p-xxl bg-dark-blue'>
            <div className='container'>
                <ul className='redes pt-xxl pb-xxl'>
                    <li><a href='https://www.google.com/' target="_blank">{tiktok}</a></li>
                    <li><a href='https://www.google.com/' target="_blank">{linkedin}</a></li>
                    <li><a href='https://www.google.com/' target="_blank">{instagram}</a></li>
                    <li><a href='https://www.google.com/' target="_blank">{facebook}</a></li>
                </ul>
                <hr />
                <div className='politics'>
                    <span className='display-i-b mt-xl mb-xl mr-sm ml-sm'>Ⓒ2020 Aprende Institute.</span>
                    <div>
                        <span className='display-i-b mt-xl mb-xl mr-sm ml-sm'>Términos y Condiciones</span>
                        <span className='display-i-b mt-xl mb-xl mr-sm ml-sm'>Política de Privacidad</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
