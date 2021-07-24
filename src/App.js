import './App.css';
import Categorie from './components/categorie'
import Card from './components/card'
function App() {

  const categorieList = [
    { img: 'https://www.greenqueen.com.hk/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss.jpg', title: 'title1', description: 'desc.......' },
    { img: 'https://www.cieau.com/wp-content/uploads/2019/11/eau_nature-525x350.jpg', title: 'title2', description: 'desc.......' },
    { img: 'https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg', title: 'title3', description: 'desc.......' },
    { img: 'https://www.greenqueen.com.hk/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss.jpg', title: 'title1', description: 'desc.......' },
    { img: 'https://www.cieau.com/wp-content/uploads/2019/11/eau_nature-525x350.jpg', title: 'title2', description: 'desc.......' },
    { img: 'https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg', title: 'title3', description: 'desc.......' },
  ]
  return (
    <div className="container">
      <h1 className='text-center'>Les categories</h1>
      <div className='row'>
        {categorieList.map((item, index) => {
          return (
            <div className='col-md-4' key={index}> <Categorie item={item} /> </div>
          )
        })}
        {categorieList.map((item, index) => {
          return (
            <div className='col-md-2' key={index}> <Card item={item} /> </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
