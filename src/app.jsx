import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import CardListComponent from './components/card_list/card_list'
import ScrapCheckButton from './components/scrap_view_button/scrap_view_button'

function App({ bucketplace }) {
  const [cards, setCards] = useState([])
  const [isFetch, setIsFetch] = useState(false)
  const [isScrapView, setIsScrapView] = useState(false)
  const [requestPageNumber, setRequestPageNumber] = useState(1)

  const onScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    )
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const clientHeight = document.documentElement.clientHeight

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsFetch(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    bucketplace.getNewItems(requestPageNumber).then(data => {
      setCards(...cards, data)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    setIsFetch(false)
    bucketplace.getNewItems(requestPageNumber).then(data => {
      if (data.length === 0) {
        return
      }
      setCards(cards.concat(data))
      setRequestPageNumber(requestPageNumber + 1)
    })
  }, [isFetch])

  return (
    <div className={styles.app}>
      <main className={styles.container}>
        <ScrapCheckButton
          isScrapView={isScrapView}
          setIsScrapView={setIsScrapView}
        />
        <CardListComponent cards={cards} isScrapView={isScrapView} />
      </main>
    </div>
  )
}

export default App
