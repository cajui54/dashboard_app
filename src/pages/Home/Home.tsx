import * as Styles from './Home.css';
import SearchSell from './Search/SearchSell';
import SearchResult from './SearchResult/SearchResult';

const Home = () => {
  
  return (
    <Styles.HomeMain>
      <Styles.ContainerSearh>
        <SearchSell/>
        <SearchResult/>
      </Styles.ContainerSearh>
    </Styles.HomeMain>
  )
}

export default Home
