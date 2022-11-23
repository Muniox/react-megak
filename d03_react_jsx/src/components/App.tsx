import { FC } from 'react'


export const App: FC = ()  => {
 

  // zawsze używaj () do return
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" tabIndex={-1} />
        <p contentEditable={true}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Blanditiis non nihil facilis itaque amet doloremque mollitia, accusantium eum error 
          sequi aut quibusdam eligendi aperiam asperiores aliquam esse hic sapiente voluptatibus?
        </p>
      </header>
    </div>
  )
}



