import styles from './Card.module.scss';
import heroImage from './assets/images/image-avatar.webp';
import illustration from './assets/images/illustration-article.svg';
import { Lable } from './components/lable/lable';

function Card() {
    return (
        <div className={styles.card}>
            <img src={illustration} alt="illustration article img" className={styles.img} />
            <Lable titleText="Learning" />
            <h4 className={styles.h4}> Published 21 Dec 2023</h4>
            <h1 className={styles.h1}> HTML & CSS foundations</h1>
            <p className={styles.p}>
                These languages are the backbone of every website, defining structure, content, and
                presentation.
            </p>
            <div className={styles.autherCard}>
                <img src={heroImage} alt="hero img" className={styles.autherImg} />
                <span className={styles.autherName}> Greq Hooper</span>
            </div>
        </div>
    );
}

export default Card;
