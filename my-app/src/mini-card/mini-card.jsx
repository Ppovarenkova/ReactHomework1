import styles from "./mini-card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { miniCardsArray } from "./test";

export default function MiniCard(props){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <div className={styles.card}>
        <div className={styles.content}>
        <section className={styles.textContent}>
            <p className={styles.date}>{date}</p>
            <h2 className ={styles.title}>{props.title}</h2>
        </section>
        <div>
            <img className={styles.image} alt='asrtonaut'src={props.image}/>
        </div>
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
export function miniRender(props){
    return(
        <>
        {miniCardsArray.map((card)=>{
            
            return(
                <MiniCard title ={card.title} image = {card.imageSrc}/>
            );
        })}
        </>
    );
}