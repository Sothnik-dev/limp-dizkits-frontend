import styles from './cardDisc.module.css'
import { GetApiValue } from '@/app/page';

import TagComponent from '../tag/tagComponent';

const postData = await GetApiValue();

const CardDisc = (props: any) => {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.spaceCenter}>
                <img className={styles.mainImage} src={props.img} alt="mainImage" />
                <div id={styles.discContainer}>
                    <img className={styles.discImage} src="/vinilBaseupd.png" alt="vinil disc" />
                    <img className={styles.innerImage} src={props.img} alt="innerImage" />
                    <div className={styles.discPoint}></div>
                </div>
            </div>
            <div>
                <div className={styles.tagContainer}>
                    {postData.map((post: any) => {
                        return <TagComponent
                            key={post.discId}
                            tagValue={post.discTags[0]}
                        />
                    })}
                </div>
            </div>
            <div>
                <div>
                    <h1 className={styles.title}>{props.title}</h1>
                    <h1 className={styles.desc}>{props.desc}</h1>
                </div>
            </div>
            <div>
                <div className={styles.infoSection}>
                    <h1>R$ {props.price}</h1>
                    <h1>{props.amount} unidades</h1>
                </div>
            </div>
            <div className={styles.spaceCenter}>
                <button className={styles.btnStyle}>Compre aqui</button>
            </div>
        </div>
    );
}

export default CardDisc;