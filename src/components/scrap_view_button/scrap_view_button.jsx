import styles from './scrap_view_button.module.css'

const ScrapCheckButton = props => {
  return (
    <>
      <p className={styles.check_button}>
        <input
          className={styles.check_input}
          checked={props.isScrapView}
          type="checkbox"
          onChange={() => props.setIsScrapView(!props.isScrapView)}
        ></input>
        &nbsp;스크랩한 것만 보기
      </p>
    </>
  )
}

export default ScrapCheckButton
