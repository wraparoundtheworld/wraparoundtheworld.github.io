import { useState, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';
import {
  Modal,
  List,
  Frame,
  TaskBar,
  Button,
  ThemeProvider,
  GlobalStyle,
} from '@react95/core';
import styled from 'styled-components';
import { createGlobalStyle } from '@xstyled/styled-components';
import {
  Drvspace7,
  Issue,
  Mmsys112,
  Winpopup1,
  Wab321019,
  Sndrec3210
} from '@react95/icons';
import { getImagePath } from '../utils/image';
import { TASKBAR_HEIGHT } from '../utils/constants';
import { isMobileDevice } from '../utils/mobile';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


const InsideModal = styled(Frame)`
  text-align: center;
  height: 100%;
  overflow: auto;
  padding: 20px;
  box-shadow: none;
`;

const Wallpaper = createGlobalStyle`
  body {
    background: url( ${getImagePath("/image/wallpaper_flower.png")}) no-repeat center center fixed;
    background-size: cover;
  }
  `;

export default function Home() {
  /* Spotify Modal */
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);

  const [isMobile, setIsMobile] = useState();

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const ref = useRef(null);
  const overflowRef = useRef(null);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, [setIsMobile]);
 
  const handleOpenSpotifyModal = useCallback(() => {
    setShowSpotifyModal(true);
  }, []);
  const handleCloseSpotifyModal = useCallback(() => {
    setShowSpotifyModal(false);
  }, []);

  /* Casamento */
  const [showCasamentoModal, setShowCasamentoModal] = useState(true);

  useEffect(() => {
    if(ref.current != null)
      ref.current.parentElement.style.overflow = 'auto';
  }, [ref.current, showCasamentoModal]);


  const handleOpenCasamentoModal = useCallback(() => {
    setShowCasamentoModal(true);
  }, []);

  const handleCloseCasamentoModal = useCallback(() => {
    setShowCasamentoModal(false);
  }, []);
  

  /* Sobre nós */
  const [showSobreNosModal, setShowSobreNosModal] = useState(false);

  useEffect(() => {
    if(overflowRef.current != null)
      overflowRef.current.parentElement.style.overflow = 'auto';
  }, [overflowRef.current, showSobreNosModal]);

  const handleOpenSobreNosModal = useCallback(() => {
    setShowSobreNosModal(true);
  }, []);

  const handleCloseSobreNosModal = useCallback(() => {
    setShowSobreNosModal(false);
  }, []);


  /* Mais informações */
  const [showInformacoesModal, setShowInformacoesModal] = useState(false);

  useEffect(() => {
    if(overflowRef.current != null)
      overflowRef.current.parentElement.style.overflow = 'auto';
  }, [overflowRef.current, showInformacoesModal]);

  const handleOpenInformacoesModal = useCallback(() => {
    setShowInformacoesModal(true);
  }, []);

  const handleCloseInformacoesModal = useCallback(() => {
    setShowInformacoesModal(false);
  }, []);

  /* Padrinhos */
  const [showPadrinhosModal, setShowPadrinhosModal] = useState(false);

  const handleOpenPadrinhosModal = useCallback(() => {
    setShowPadrinhosModal(true);
  }, []);

  const handleClosePadrinhosModal = useCallback(() => {
    setShowPadrinhosModal(false);    
  }, []);

  const [showAlertYes, toggleShowAlertYes] = useState(false);
  const [showAlertNo, toggleShowAlertNo] = useState(false);

  const handleOpenAlert = () => toggleShowAlertYes(true);
  const handleCloseAlert = () => toggleShowAlertYes(false);

  const handleOpenAlertNo = () => toggleShowAlertNo(true);
  const handleCloseAlertNo = () => toggleShowAlertNo(false);

  /* Confirmação de casamento */
  const [showConfirmacaoModal, setShowConfirmacaoModal] = useState(false);

  const handleOpenConfirmacaoModal = useCallback(() => {
    setShowConfirmacaoModal(true);
  }, []);

  const handleCloseConfirmacaoModal = useCallback(() => {
    setShowConfirmacaoModal(false);    
  }, []);

  /* Github */
  const openGithub = function () {
    window.open('https://github.com/henriquespecian/casamento-nextjs');
  };

  const share = async function () {
    const url = "https://henriquespecian.github.io/casamento-nextjs/";
    if (navigator.canShare && navigator.canShare({ url })) {
      await navigator.share({ url });
    }
  }

  const can = function () {
    const url = "https://henriquespecian.github.io/casamento-nextjs/";
    return (navigator.canShare && navigator.canShare({ url }));
  }

  const [canShare, setcanShare] = useState();

  useEffect(() => {
    setcanShare(can());
  }, [setcanShare]);


  return (
    <ThemeProvider theme={'millenium'}>
      <GlobalStyle  />
      <Wallpaper />
      <div>
        <Head>
          <title>Henrique & Monica</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Modal do Casamento */}
        {showCasamentoModal && (
          <Modal
            className={!isMobile ? 'modal' : ''}
            title="Casamento.exe"
            closeModal={handleCloseCasamentoModal}
            icon={<Drvspace7 variant="32x32_4" />}
            style={{
              ...(isMobile
                ? {
                    top: '3%',
                    left: '5%',
                    height: `calc(94% - ${TASKBAR_HEIGHT}px)`,
                    width: '90%',
                    margin: 0,
                  }
                : {}),
            }}
            menu={[
              {
                name: 'Options',
                list: (
                  <List>
                    <List.Item onClick={handleCloseCasamentoModal}>
                      Close
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <InsideModal bg="white" boxShadow="out" ref={ref}>
              <div>
                <br />
                <div className="hero">
                  <img
                    width={50}
                    height={50}
                    src={getImagePath('/image/heart.gif')}
                    className="heart"
                  />
                  <h1 className="titulo">Monica & Henrique</h1>
                  <img
                    width={50}
                    height={50}
                    src={getImagePath('/image/heart.gif')}
                    className="heart"
                  />
                </div>
                <br />
                <h2>São Paulo. 13 Abril 2024</h2>
                <br />
                <br />
                <img
                  className="image-center couple"
                  src={getImagePath('/image/Monica_HenriquepxArt.png')}
                  alt="Monica & Henrique & Sophia"
                />
                <br />
                <h2>Vamos nos casar!</h2>
                <p>
                Depois de 14 anos de amizade e 8 anos de namoro, chegou a hora de comemorarmos nosso casamento! 
                </p>
                <br />
                <p>
                Contamos com cada um dos convidados para celebrar essa história e marcar o início dessa nossa nova fase. A noite promete ser repleta de comida boa, bons drinks e KARAOKÊ!!!
                </p>
                <br />
                <img
                  className="icons"
                  src={getImagePath('/image/megaphone.png')}
                  alt="Prestenção"
                /> 
                <p>
                Veja abaixo um pouco sobre nós, a nossa história, detalhes da festa e, o mais importante, a lista de presentes!
                </p>
                <br />
                <br />
                <h2>Faltam:</h2>
                {/* Do not prerender to avoid hydration error */}
                {isClient && (<FlipClockCountdown 
                    to={'2024-03-13T19:00:00.635Z'}             
                    labels={['DIAS', 'HORAS', 'MINUTOS', 'SEGUNDOS']}
                    className="flip-clock"
                />)}              
                <br />
                <br />
                <h2>Local e Horário</h2>
                <p>Colocar aqui uma informação sobre horário, talvez bem destacado</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.153255731116!2d-46.6552800236925!3d-23.526989660332237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a6f0437e37%3A0xf08fb1dfb1c91838!2sA%20Casa%20de%20Babette!5e0!3m2!1spt-BR!2sbr!4v1689711470236!5m2!1spt-BR!2sbr"
                  width={isMobile ? '210' : '400'}
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p>
                  Rua Anhanguera, 104, A Casa de Babette - Barra funda, São
                  Paulo - SP
                </p>
                <br />
                <br />
                <h2>Lista de Presentes</h2>
                <p>Temos duas formas de enviar presente, uma é a lista de presente que é só clicar no ícone abaixo para ter acesso e a outra é enviar um PIX com uma mensagem bem legal pra gente</p>
                <p>Mas também aceitamos presentes ao vivo, como os antigos faziam</p>
                <br />
                <br />
                <p>
                  <a href='https://noivos.casar.com/monirique#/presentes'>
                  <img
                    className="icons"
                    src={getImagePath('/image/gift.png')}
                    alt="Lista de presente"
                  />
                    Lista de presentes num site feio que não fui eu que fiz
                  </a>
                </p>
                <br />
                <br />
                <a href="https://nubank.com.br/pagar/48wth/mGWKfQeR5q">
                  <img
                    className="image-center"
                    src={getImagePath('/image/qrcode-pix.png')}
                    alt="QrCode do Pix"
                    href="https://nubank.com.br/pagar/48wth/mGWKfQeR5q"
                  />
                  Clique aqui
                </a>
                <p>Chave-pix: 97241cba-c833-4fae-bab8-dc2860245083</p>

                {canShare ? 
                  <div>
                    <br />
                    <br />
                    <h2>Compartilhe!</h2>
                    <a onClick={share}>
                      <img
                        className="heart"
                        src={getImagePath('/image/whatsapp_pixel.png')}
                        alt="ZAP"
                      />
                    </a>
                  </div>
                 : null}               
              </div>
            </InsideModal>
          </Modal>
        )}

        {/* Modal do spotify  */}
        {showSpotifyModal && (
          <Modal
            title="Playlist do casamento.exe"
            className="modal-spotify"
            icon={<Mmsys112 variant="32x32_4" />}
            closeModal={handleCloseSpotifyModal}
            menu={[
              {
                name: 'Options',
                list: (
                  <List>
                    <List.Item onClick={handleCloseSpotifyModal}>
                      Close
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <iframe
              src="https://open.spotify.com/embed/playlist/5eGxfvGynjkVO96JtlaBPE?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Músicas para lembrar da Mo"
            ></iframe>
          </Modal>
        )}

        {/* Padrinhos */}
        {showPadrinhosModal && (
          <Modal
            title="Readme.txt"
            icon={<Winpopup1 variant="32x32_4" />}
            closeModal={handleClosePadrinhosModal}
            className="modal-padrinho"
            menu={[
              {
                name: 'Options',
                list: (
                  <List>
                    <List.Item onClick={handleClosePadrinhosModal}>
                      Close
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <InsideModal >
              <p>
              Sempre que nos encontramos é uma coisa nova que discutimos. Relacionamento, vida, casamento, dúvidas sobre se não sei o que eu sei ou se eu não sei o que eu não sei….. Enfim, foi com vocês que eu tirei todas as dúvidas sobre o pedido de casamento e dado tudo isso na hora de escolher os padirnhos não tinha como ser diferente.
              </p>
              <br />
              <img
                width={50}
                height={50}
                src={getImagePath('/image/heart.gif')}
                className="heart"
              />
              <h1>E ai vocês topam?</h1>
              <img
                width={50}
                height={50}
                src={getImagePath('/image/heart.gif')}
                className="heart"
              />            
            </InsideModal>
            <div className="enviarCancelar">
              <Button className="botoes" onClick={handleOpenAlert}>Sim</Button>
              {showAlertYes && 
                <Modal
                  closeModal={handleCloseAlert}
                  height="120"
                  hasWindowButton={false}
                  className="modal-baleia"
                  title="AEEEEEEEEEEEEEEEEEE"
                >
                  <img
                    width={200}
                    height={200}
                    src={getImagePath('/image/baleia-sim.gif')}
                    className="baleia" />
                </Modal>
              }
              <Button className="botoes" onClick={handleOpenAlertNo}>Não</Button>
              {showAlertNo && 
                <Modal
                  closeModal={handleCloseAlertNo}
                  height="120"
                  hasWindowButton={false}
                  className="modal-baleia"
                  title="NOOOOOOOOOOOOOOOOOO"
                >
                  <img
                    width={200}
                    height={200}
                    src={getImagePath('/image/baleia-nao.gif')}
                    className="baleia" />
                </Modal>
              }
            </div>
          </Modal>
        )}

        {/* Sobre nós  */}
        {showSobreNosModal && (
          <Modal
          className={!isMobile ? 'modal' : ''}
          title="Sobre nós"
          closeModal={handleCloseSobreNosModal}
          icon={<Wab321019 variant="32x32_4" />}
          style={{
            ...(isMobile
              ? {
                  top: '3%',
                  left: '5%',
                  height: `calc(94% - ${TASKBAR_HEIGHT}px)`,
                  width: '90%',
                  margin: 0,
                }
              : {}),
          }}
          menu={[
            {
              name: 'Options',
              list: (
                <List>
                  <List.Item onClick={handleCloseSobreNosModal}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
        >
          <InsideModal bg="white" boxShadow="out" ref={overflowRef}>
            <div>

              <h1 className="titulo">Sobre Nós</h1>
              <br />
              <br />
              <p>"Quem um dia irá dizer que não existe razão pras coisas feitas pelo coração?"</p>
              <p>Nosso amor começou de repente, sem que a gente percebesse ele já estava ali. A nossa amizade se tornou tão grande que decidimos passar o resto da vida juntos!</p>
              <br />
              <br />
              <br />
              <img
                  className="image-center about-us"
                  src={getImagePath('/image/monica.jpg')}
                  alt="Monica"
              />
              <h2 className="titulo">Monica por Henrique</h2>
              <p>"Uma mulher linda, de largo sorriso e de um humor refinado, ótima e atenta ouvinte.</p>
              <p>Se você procura por algum lugar novo onde comer, pode consultar seu imenso e vasto <a href='https://maps.app.goo.gl/4yBS6wbEfL3uR3AV9'>catálogo de lugares para visitar</a>, sempre haverá um cantinho da cidade não explorado que ela cuidadosamente guardou para um momento em que um passeio se faz necessário.</p>
              <p>Sua paixão por cachorro não se resume ao seu maior amor, a Sophia, vai muito além, sorrindo e apontando para cada animalzinho na rua. Adora dar nomes a cachorros de portão e criar personalidades inteiras baseadas no vazio olhar que eles tem, sem julgamentos, porque depois desses anos todos juntos esse é o meu maior passatempo também.</p>
              <p>Uma mão mágica para a cozinha, parte pela sua intuição para combinar sabores e texturas e parte pelo seu lado de estar sempre aprendendo uma coisa nova nos mínimos detalhes, seja ela todos os passos de fazer um carbonara perfeito até como é extraído o açafrão das flores.</p>
              <p>Enfim, a mulher que eu escolhei para passar o resto da vida junto."</p>
              <br />
              <br />
              <br />
              <br />              
              <img
                  className="image-center about-us"
                  src={getImagePath('/image/henrique.jpg')}
                  alt="Henrique"
              />
              <h2 className="titulo">Henrique por Monica</h2>
              <p>"É impossível encontrar uma pessoa que não goste do Henrique. Ele é a personificação de um labrador, simpático, extrovertido e tranquilo. No rolê, ele é a central de assuntos, sempre ouviu a última fofoca (porém só lembra a metade), ouviu um podcast recentemente, viu um documentário sobre, sempre chega dizendo: “já imaginou se acontece tal coisa?”</p>
              <p>Sempre disponível pra dar uma voltinha, o Henrique gosta de conhecer cafés especiais, de comer pratos preparados em grandes restaurantes, da mesma maneira que entra em qualquer buteco pra comer um baião de dois e tomar cerveja.</p>
              <p>O jeito lógico de programador não tirou o lado cuidadoso com as pessoas e a dedicação que o Henrique tem com aqueles que são importantes na sua vida. É com os amigos e com a família que ele prefere passar a maior parte do tempo, principalmente se tiver um jogo do São Paulo para assistir e o lugar for pet friendly, pra poder ficar com a sua melhor amiga Sophia"</p>
            </div>
          </InsideModal>
        </Modal>
        )}

        {/* Mais informações */}
        {showInformacoesModal && (
          <Modal
          className={!isMobile ? 'modal' : ''}
          title="Informações"
          closeModal={handleCloseInformacoesModal}
          icon={<Sndrec3210 variant="32x32_4" />}
          style={{
            ...(isMobile
              ? {
                  top: '3%',
                  left: '5%',
                  height: `calc(94% - ${TASKBAR_HEIGHT}px)`,
                  width: '90%',
                  margin: 0,
                }
              : {}),
          }}
          menu={[
            {
              name: 'Options',
              list: (
                <List>
                  <List.Item onClick={handleCloseInformacoesModal}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
        >
          <InsideModal bg="white" boxShadow="out" ref={overflowRef}>
            <div>

              <h1 className="titulo">Informação</h1>

              <p>Queremos que todos estejam BEM BONITOS mas também confortáveis pra arrasar na cantoria do karaokê. Recomendamos para os homens terno e camisa social, e para as mulheres vestidos longos ou midi, macacões, ternos. Se quiser complementar o look com um tênis casual que você goste muito, fique à vontade!</p>
              <br />
              <p>Caso queira se hospedar bem pertinho do casamento, estas são algumas opções:</p>
              <a href='https://maps.app.goo.gl/xzVNepR6cXJvxZwr5'>https://maps.app.goo.gl/xzVNepR6cXJvxZwr5</a>
            </div>
          </InsideModal>
        </Modal>
        )}

        {/* Menu Iniciar  */}
        <TaskBar
          list={
            <List>
              <List.Item
                icon={<Drvspace7 variant="32x32_4" />}
                onClick={handleOpenCasamentoModal}
              >
                Casamento
              </List.Item>
              <List.Item
                icon={<Mmsys112 variant="32x32_4" />}
                onClick={handleOpenSpotifyModal}
              >
                Playlist do casamento
              </List.Item>
              <List.Item 
                icon={<Wab321019 variant="32x32_4" />}
                onClick={handleOpenSobreNosModal}
              >
                Sobre nós
              </List.Item>
              <List.Item 
                icon={<Sndrec3210 variant="32x32_4" />}
                onClick={handleOpenInformacoesModal}
              >
                Mais informações
              </List.Item>
              {/*<List.Item
                icon={<Winpopup1 variant="32x32_4" />}
                onClick={handleOpenPadrinhosModal}
              >
                Marcela & GG
              </List.Item>*/}
              <List.Divider />
              <List.Item
                icon={<Issue variant="32x32_4" />}
                onClick={openGithub}
              >
                Github
              </List.Item>
            </List>
          }
        />
      </div>
    </ThemeProvider>
  );
}