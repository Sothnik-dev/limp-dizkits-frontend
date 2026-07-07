import './styles/global.css'
import styles from './page.module.css'
import Image from 'next/image';

const Home = () => {
    return (
    <html>
        <body>
            <main className={styles.spaceBetween}>
                <div>
                    <h1 className={styles.upperTextL}>Sinta tudo que só a música poderia te oferecer, em  poucos cliques</h1>
                </div>
                <div>
                    <Image 
                        src="/logoBeta.png"
                        alt='versão beta da logo'
                        width={200}
                        height={200}
                    />
                </div>
                <div>
                    <h1 className={styles.upperTextR}> com Limp Dizkits que consegue converter um quarto naquele veridico estúdio</h1>
                </div>
            </main>       
        </body>
    </html>
    );
}

export default Home;