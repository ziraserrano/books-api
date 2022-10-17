document.querySelector('button').addEventListener('click', getBook)

function getBook(){
  const subject = document.querySelector('input').value
  console.log(subject)

  const url = `https://openlibrary.org/subjects/${subject}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // const randomBooks = data.works[Math.random() * data.works.length]
        console.log(data.works[0])
        
        document.querySelector('#book-title').innerText = data.works[0].title
        document.querySelector('#author').innerText = 'By: ' + data.works[0].authors[0].name
        
        if(data.works[0].availability.isbn === null){
            document.querySelector('#ISBN').innerText = 'ISBN: ' + 'Not found.'
        }else{
            document.querySelector('#ISBN').innerText = 'ISBN: ' + data.works[0].availability.isbn
        }

        if(data.works[0].first_publish_year === null){
            document.querySelector('#ISBN').innerText = 'Year Published: ' + 'Not found.'
        }else{
            document.querySelector('#published').innerText = 'Year Published: ' + data.works[0].first_publish_year
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}