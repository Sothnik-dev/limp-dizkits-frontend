import styles from './cardDisc.module.css'

const CardDisc = (props) => {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.spaceCenter}>
                <img className={styles.mainImage} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F0f852a2f62470a5964b9812519774df3.1000x1000x1.png&f=1&nofb=1&ipt=a880c051a2fee4fe71b3aae534b8748871efd3676b576c415c7e5ff984e4e1cd" alt="" />
                <img src="" alt="" />
            </div>
            <div>
                <div>
                    <h1>{props.title}</h1>
                    <h1>desc</h1>
                </div>
            </div>
            <div>
                <div className={styles.spaceBetween}>
                    <h1>price</h1>
                    <h1>quantity</h1>
                </div>
            </div>
            <div>
                <button>Comprar</button>
            </div>
        </div>
    );
}

export default CardDisc;