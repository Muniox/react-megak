import './App.css'
import { Person } from './main';

interface AppProps {
  person: Person
}

export const App = (props: AppProps) => {
  // do wyświetlania propsów najelpiej zamiast console.log użyć react devTools
  // console.log(props)

  return (
    <div className="App">
      <h1>Hello, world {props.person.name}!</h1>
      <hr />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam consectetur mollitia natus quis quo sequi nulla eligendi, molestiae provident facere cupiditate tempora. 
        Distinctio error amet neque excepturi animi iure voluptate sed minus qui corrupti vel voluptatem, corporis impedit? Aliquid pariatur nulla, sint quas exercitationem explicabo minus 
        eligendi harum quisquam quam quasi eaque at nesciunt id corrupti aspernatur esse fugit nemo alias. Quaerat doloremque eveniet necessitatibus! Repellendus architecto magni vitae. 
        Veritatis molestiae hic quia tempora, libero error iste. Saepe autem quam magnam inventore adipisci quae cum tenetur itaque dolor facere! 
        Harum nulla ad modi quos laudantium eius quas quod neque!
      </p>
    </div>
  )
}
