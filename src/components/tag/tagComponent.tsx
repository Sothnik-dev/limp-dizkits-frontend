import styles from './tagComponent.module.css'

const TagComponent = (props: any) => {
    return(
        <div id={styles.tagCapsule}>
            <h1>{props.tagValue}</h1>
        </div>
    )
}

export default TagComponent;