import './index.scss';
import { tiktok, linkedin, instagram, facebook } from './icons'

function Footer() {
    return (
        <footer className='p-xxl bg-dark-blue'>
            <ul className='redes pt-xxl pb-xxl'>
                <li>{tiktok}</li>
                <li>{linkedin}</li>
                <li>{instagram}</li>
                <li>{facebook}</li>
            </ul>
            <hr />
            <div>
                <span className='display-i-b mt-xl mb-xl mr-sm ml-sm'>Ⓒ2020 Aprende Institute.</span>
                <span className='display-i-b mt-xl mb-xl mr-sm ml-sm'>Términos y Condiciones</span>
                <span className='display-i-b mt-xl mb-xl mr-sm ml-sm'>Política de Privacidad</span>
            </div>
        </footer>
    );
}

export default Footer;
