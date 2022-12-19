import './App.pcss'
import {Dialog} from "./components/common/Dialog/Dialog";

export const App = () => {


  return (
    <div className="App">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur corporis debitis deleniti
        dolore, doloribus fugit impedit iusto libero magnam nobis placeat praesentium tempora vel veritatis? Consequatur
        molestias perferendis ratione?</p><p>Ab corporis culpa cupiditate delectus dolorum fugiat in ipsa iste, magni
      minima perferendis quidem quo reiciendis rem rerum suscipit temporibus ullam ut. Architecto fuga nihil nobis, quae
      reprehenderit tenetur ut.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur corporis debitis deleniti
        dolore, doloribus fugit impedit iusto libero magnam nobis placeat praesentium tempora vel veritatis? Consequatur
        molestias perferendis ratione?</p><p>Ab corporis culpa cupiditate delectus dolorum fugiat in ipsa iste, magni
      minima perferendis quidem quo reiciendis rem rerum suscipit temporibus ullam ut. Architecto fuga nihil nobis, quae
      reprehenderit tenetur ut.</p>
      <Dialog title="Witam serdecznie na stronie głównej!"/>
      {/*<Dialog body={*/}
      {/*  <>*/}
      {/*    <h1>Tytuł okna...</h1>*/}
      {/*    <p>Silala</p>*/}
      {/*    <p>hehehehe</p>*/}
      {/*  </>*/}
      {/*}/>*/}
      <Dialog title="Testowe okno">
        <h1>Tytuł okna...</h1>
        <p>Silala</p>
        <p>hehehehe</p>
      </Dialog>
      <Dialog>
        <p>Silala</p>
        <p>hehehehe</p>
      </Dialog>
      <p>Adipisci asperiores at consequatur dolor dolores ducimus eaque eligendi inventore
      ipsam non nulla obcaecati officiis, provident quia quibusdam, repellendus sed suscipit. Autem corporis ea labore
      nostrum provident qui sed veritatis?</p><p>Adipisci aliquam at consequatur consequuntur corporis, debitis delectus
      deserunt dolor doloremque dolorum eos est ex maiores, nesciunt, non perspiciatis quam quod reiciendis repellendus
      sed sint tenetur vitae voluptate. Enim, expedita?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur corporis debitis deleniti
        dolore, doloribus fugit impedit iusto libero magnam nobis placeat praesentium tempora vel veritatis? Consequatur
        molestias perferendis ratione?</p><p>Ab corporis culpa cupiditate delectus dolorum fugiat in ipsa iste, magni
      minima perferendis quidem quo reiciendis rem rerum suscipit temporibus ullam ut. Architecto fuga nihil nobis, quae
      reprehenderit tenetur ut.</p>

    </div>
  )
}

