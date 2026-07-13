import axios from 'axios';
import '../styles/global.css'
import styles from '../styles/page.module.css'

import Image from 'next/image';

import CardDisc from '@/components/cardDisc';

export default async function Home() {

    const responseApi = await axios.get("http://localhost:8080/disc/all")
    .then((disc) => console.log(disc.data))
    .catch(() => console.log('Não foi possivel contatar a API'));

        
    return (
        <html>
            <body>
                <main className={styles.spaceEvenly}>
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
                <section> 
                    <CardDisc title={'teste'}></CardDisc>
                </section>
            </body>
        </html>
    );
}