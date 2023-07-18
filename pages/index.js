import { useState, useCallback } from 'react';
import Head from 'next/head';
import { Modal, List, Frame, TaskBar} from "@react95/core";
import styled from 'styled-components';
import MonicaHenrique_pixelated from "../Monica_HenriquepxArt.png";
import Heart from "../heart.gif"
import { Drvspace7, Issue, FilePin, Packager1, Mmsys112 } from "@react95/icons";

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

  /* Spotify Modal */
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);
  
  const handleOpenSpotifyModal = useCallback(() => {
    setShowSpotifyModal(true);
  }, []);
  const handleCloseSpotifyModal = useCallback(() => {
    setShowSpotifyModal(false);
  }, []);

  /* Casamento */
  const [showCasamentoModal, setShowCasamentoModal] = useState(true);

  const handleOpenCasamentoModal = useCallback(() => {
    setShowCasamentoModal(true);
  }, []);

  const handleCloseCasamentoModal = useCallback(() => {
    setShowCasamentoModal(false);
  }, []);

  /* Github */
  const openGithub = function() {
    window.open("https://github.com/henriquespecian/casamento-nextjs");
  }


  return (
    
    <div className="container">

      <Head>
        <title>Henrique e Monica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Modal do Casamento */}
      {showCasamentoModal && <Modal
        title='Casamento.exe'
        style={{
          margin:'1rem 1rem 1rem 1rem',
          height: '80vh',
          display: 'flex'
        }}
        closeModal={handleCloseCasamentoModal}
        icon={<Drvspace7 variant="32x32_4" />}
        menu={[
          {
            name: "Options",
            list: (
              <List>
                <List.Item onClick={handleCloseCasamentoModal}>Close</List.Item>
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
            <div>
              <img src={Heart} style={{display: 'inline-block'}}></img>
              <h1 style={{display: 'inline-block'}} >Monica & Henrique</h1> 
              <img src={Heart} style={{display: 'inline-block'}}></img>
            </div>
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
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.153255731116!2d-46.6552800236925!3d-23.526989660332237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a6f0437e37%3A0xf08fb1dfb1c91838!2sA%20Casa%20de%20Babette!5e0!3m2!1spt-BR!2sbr!4v1689711470236!5m2!1spt-BR!2sbr" 
              width="400" 
              height="300"
              style={{border:0}} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <p>Rua Anhanguera, 104, A Casa de Babette - Barra funda, São Paulo - SP</p>
            <br></br>
            <br></br>
            <h2>Lista de Presentes</h2>
            <br></br>
            <br></br>
          </div>
        </InsideModal>
      </Modal>}

{/* Modal do spotify  */}
{showSpotifyModal && <Modal
          title='Playlist do casamento.exe'
          style={{
            margin:'1rem 1rem 1rem 1rem',
            height: '43vh',
            width: '50vw',
            display: 'flex'
          }}
          icon={<Mmsys112 variant="32x32_4" />}
          closeModal={handleCloseSpotifyModal }
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseSpotifyModal }>Close</List.Item>
                </List>
              ),
            },
          ]}>
     <iframe 
              src="https://open.spotify.com/embed/playlist/5eGxfvGynjkVO96JtlaBPE?utm_source=generator&theme=0" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Músicas para lembrar da Mo">
      </iframe>
  </Modal>
  }


  {/* Menu Iniciar  */}
  <TaskBar
    list={
      <List>

        <List.Item
          icon={<Drvspace7 variant="32x32_4" />}
          onClick={handleOpenCasamentoModal}>
          Casamento
        </List.Item>
        <List.Item
          icon={<Mmsys112 variant="32x32_4" />}
          onClick={handleOpenSpotifyModal}>
          Playlist do casamento
        </List.Item>
        <List.Item
          icon={<Packager1 variant="32x32_4" />}>
          Lista de presentes
        </List.Item>
        <List.Item
          icon={<FilePin variant="32x32_4" />}>
          Confirmação de presença
        </List.Item>
        <List.Divider />
        <List.Item
          icon={<Issue variant="32x32_4" />}
          onClick={openGithub}>
          Github
        </List.Item>
      </List>
    }
  />

    </div>
  );
}
