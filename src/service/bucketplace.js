class Bucketplace {
  constructor() {
    this.getRequestOptions = {
      metohd: 'GET',
      redirect: 'follow',
    }
  }
  getNewItems(pageNumber) {
    return fetch(
      `https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${pageNumber}.json`,
      this.getRequestOptions
    )
      .then(response => response.json())
      .catch(error => console.log('error', error))
  }
}

export default Bucketplace
