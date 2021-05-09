import styles from './card_item.module.css'

const CardItem = ({ card }) => (
  <ul className={styles.card}>
    <div className={styles.title}>
      <img
        alt="profile"
        className={styles.profileImage}
        src={card.profile_image_url}
      />
      <span className={styles.nickname}>{card.nickname}</span>
    </div>
    <img
      alt={card.description}
      className={styles.roomImage}
      src={card.image_url}
    />
  </ul>
)

export default CardItem
