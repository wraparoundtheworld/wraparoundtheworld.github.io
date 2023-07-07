import Head from 'next/head';
import { Modal, List, Frame, TaskBar} from "@react95/core";
import styled from 'styled-components';
import MonicaHenrique_pixelated from "../Monica_HenriquepxArt.png";
import { Drvspace7, Issue, FilePin, Packager1 } from "@react95/icons";

const dataFormatada = function()
{
  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;

  let distancia = Math.abs(new Date() - new Date(2024,3,13,18))

  var d = Math.floor(distancia / _day);
  var h = Math.floor((distancia % _day) / _hour);
  var m = Math.floor((distancia % _hour) / _minute);
  var s = Math.floor((distancia % _minute) / _second);

  return d + ' dias ' + h +' horas ' + m + ' minutos ' + s + ' segundos';
};

const dataRegressiva = dataFormatada();

const InsideModal = styled(Frame)`
  overflow-y: 'auto';  
  text-align: center;
  max-height: 70vh;
  max-width: 90vh;
`;

export default function Home() {
  return (
    <div className="container">

        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Modal
          title='Casamento.exe'
          style={{
            margin:'1rem 1rem 1rem 1rem',
            height: '80vh',
            display: 'flex'
          }}
          icon={<Drvspace7 variant="32x32_4" />}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <InsideModal bg="white" boxShadow="out">
            <div           
              style={{
              height: '100%',
              overflow : 'auto',
              padding: '20px'
            }}>
              <br></br>
              <h1 >Monica & Henrique</h1>
              <br></br>
              <h2>São Paulo. 13 Abril 2024</h2>
              <br></br>
              <br></br>
              <img
                style={{
                  height: '50%',
                  width: '50%',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                src={MonicaHenrique_pixelated}
                alt="Monica & Henrique & Sophia"
              />
              <h2>Vamos nos casar!</h2>
              <p>
                O grande dia está chegando e não poderíamos estar mais animados para compartilhar com a nossa família e amigos um dos dias mais especiais das nossas vidas!
              </p>          
              <br></br>
              <p>
                Queremos muito sua presença neste dia tão importante com muita festa, amor e carinho em uma comemoração que irá nos marcar para sempre!
              </p>
              <br></br>
              <br></br>
              <h2>Faltam:</h2>
              {dataRegressiva}
              <br></br>
              <br></br>
              <h2>Endereco</h2>
              <p>Rua Anhanguera, 104, A Casa de Babette - Barra funda, São Paulo - SP</p>
              <br></br>
              <br></br>
              <h2>Lista de Presentes</h2>
              <link href="https://www.amazon.com.br/"></link>
              <br></br>
              <br></br>
            </div>
          </InsideModal>
        </Modal>
      <TaskBar
        list={
          <List>
            <List.Item
             icon={<Packager1 variant="32x32_4" />}
            >
              Lista de Presentes
            </List.Item>
            <List.Item
             icon={<FilePin variant="32x32_4" />}
            >
              Confirmação de presença
            </List.Item>
            <List.Divider />
            <List.Item
             icon={<Issue variant="32x32_4" />}
            >
              Github
            </List.Item>
          </List>
        }
      />        
    </div>
  );
}
