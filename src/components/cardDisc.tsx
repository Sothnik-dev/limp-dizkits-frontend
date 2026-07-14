import styles from './cardDisc.module.css'

const CardDisc = (props: any) => {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.spaceCenter}>
                <img className={styles.mainImage} src={props.img} alt="mainImage" />
                <img className={styles.discImage} src="/vinilBaseupd.png" alt="vinil disc" />
                <img className={styles.innerImage} src={props.img} alt="innerImage" />
            </div>
            <div>
                <div>
                    <h1>{props.title}</h1>
                    <h1>{props.desc}</h1>
                </div>
            </div>
            <div>
                <div className={styles.spaceBetween}>
                    <h1>R$ {props.price}</h1>
                    <h1>{props.amount} unidades</h1>
                </div>
            </div>
            <div>
                <button>Comprar</button>
            </div>
        </div>
    );
}

export default CardDisc;