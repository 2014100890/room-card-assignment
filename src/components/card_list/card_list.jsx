import React, { useEffect, useState } from 'react'
import CardItem from '../card_item/card_item'
import ScrapButtonComponent from '../scrap_toggle_button/scrap_toggle_button'
import styles from './card_list.module.css'

function CardListComponent(props) {
  const [scrapCardID, setScrapCardID] = useState([])

  useEffect(() => {
    const scrapedCards = localStorage.getItem('Scraped_Card')
    if (!scrapedCards) {
      scrapedCards = localStorage.setItem('Scraped_Card', JSON.stringify([]))
    }
    setScrapCardID(scrapedCards)
  }, [])

  return (
    <ul className={styles.cards}>
      {props.cards.map(card => {
        if (!scrapCardID) return null
        const isScrap = scrapCardID.includes(card.id) ? true : false
        if (!props.isScrapView) {
          return (
            <div className={styles.card_container} key={card.id}>
              <CardItem card={card} />
              <ScrapButtonComponent
                cardId={card.id}
                isScrap={isScrap}
                setScrapCardID={setScrapCardID}
              />
            </div>
          )
        } else if (props.isScrapView && isScrap) {
          return (
            <div className={styles.card_container} key={card.id}>
              <CardItem card={card} />
              <ScrapButtonComponent
                cardId={card.id}
                isScrap={isScrap}
                setScrapCardID={setScrapCardID}
              />
            </div>
          )
        }
      })}
    </ul>
  )
}

export default CardListComponent
