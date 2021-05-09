import { ReactComponent as ScrapOn } from '../../images/scrap_on.svg'
import { ReactComponent as ScrapOff } from '../../images/scrap_off.svg'
import styles from './scrap_toggle_button.module.css'

const ScrapButtonComponent = props => {
  function handleScrap() {
    const scrapedCards = JSON.parse(localStorage.getItem('Scraped_Card'))
    const cardIndex = scrapedCards.indexOf(props.cardId)

    if (cardIndex === -1) {
      scrapedCards.push(props.cardId)
    } else {
      scrapedCards.splice(cardIndex, 1)
    }
    props.setScrapCardID(scrapedCards)
    localStorage.setItem('Scraped_Card', JSON.stringify(scrapedCards))
  }
  return (
    <div className={styles.scrap_toggle_button} onClick={() => handleScrap()}>
      {props.isScrap ? <ScrapOn /> : <ScrapOff />}
    </div>
  )
}

export default ScrapButtonComponent
