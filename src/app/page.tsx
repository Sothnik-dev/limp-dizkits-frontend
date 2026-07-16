import axios from 'axios';
import '../styles/global.css'
import styles from '../styles/page.module.css'

import Image from 'next/image';

import CardDisc from '@/components/card/cardDisc';

export async function GetApiValue() {
    const apiValue = await axios.get('http://localhost:8080/disc/all')
    return apiValue.data;
}

export default async function Home() {        
    const postData = await GetApiValue();

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
                <section className={styles.discsContainer}> 
                    {postData.map((post: any) => {
                        return <CardDisc 
                            key={post.discId}
                            title={post.discTitle}
                            desc={post.discDescription}
                            price={post.discValue}
                            amount={post.discAmount}
                            img={post.discImage}
                        />
                    })}
                </section>
            </body>
        </html>
    );
}