import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { cardsArrey } from "./card-data";

export default function Card(props){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <div className={styles.card}>
        <div className={styles.content}>
        <section className={styles.textContent}>
            <p className={styles.date}>{date}</p>
            <h2 className ={styles.title}>{props.title}</h2>
            <article className ={styles.text}>{props.description}</article>
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

export function cardRender(props){
    return(
        <>
        {cardsArrey.map((card)=>{
            
            return(
                <Card title ={card.title} image = {card.image} description ={card.description}/>
            );
        })}
        </>
    );
}