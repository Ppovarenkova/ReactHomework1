import styles from './medium-styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import { mediumCardsArray } from './medium-data';


export default function MediumCard(props) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <div className={styles.card}>
        <div className={styles.content}>
        <div className={styles.imageWrap}>
            <img className={styles.image} alt='asrtonaut'src={props.image}/>
        </div>
        <section className={styles.textContent}>
            <p className={styles.date}>{date}</p>
            <h3 className ={styles.title}>{props.title}</h3>
        </section>
        </div>
        <section className={styles.icons}>
            <div className={styles.leftIcons}>
            <FontAwesomeIcon icon={faThumbsUp} />
            <FontAwesomeIcon icon={faThumbsDown} />
            </div>
            <div className ={styles.rightIcons}>
            <FontAwesomeIcon icon={faBookmark} />
            <FontAwesomeIcon icon={faEllipsis} />
            </div>
        </section>
        </div>
    );
}

export function mediumRender(props){
    return (
        <>
        {mediumCardsArray.map((card)=>{
        return (
            <MediumCard title={card.title} image={card.image}/>
        );
    })}
        </>
    );
}