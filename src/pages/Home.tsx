import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth } from '../services/firebase';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button} from '../components/Button'
import '../styles/auth.scss'

export function Home() {
  const navigate = useNavigate();

  function handleCreateRoom() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
      
      navigate('/rooms/new');
    })
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustracao simulando perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className='create-room'>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className='separator'>ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala" 
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}