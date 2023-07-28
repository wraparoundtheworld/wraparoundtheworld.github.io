import { useState, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';
import {
  Modal,
  List,
  Frame,
  TaskBar,
  Fieldset,
  Input,
  Button,
  ThemeProvider,
  GlobalStyle,
} from '@react95/core';
import styled from 'styled-components';

import {
  Drvspace7,
  Issue,
  FilePin,
  Packager1,
  Mmsys112,
  Explorer108,
} from '@react95/icons';
import { getImagePath } from '../utils/image';
import { TASKBAR_HEIGHT } from '../utils/constants';
import { isMobileDevice } from '../utils/mobile';

const dataFormatada = function () {
  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;

  let distancia = Math.abs(new Date() - new Date(2024, 3, 13, 18));

  var d = Math.floor(distancia / _day);
  var h = Math.floor((distancia % _day) / _hour);
  var m = Math.floor((distancia % _hour) / _minute);
  var s = Math.floor((distancia % _minute) / _second);

  return d + ' dias ' + h + ' horas ' + m + ' minutos ' + s + ' segundos';
};

const dataRegressiva = dataFormatada();

const InsideModal = styled(Frame)`
  text-align: center;
  height: 100%;
  overflow: auto;
  padding: 20px;
  box-shadow: none;
`;

export default function Home() {
  /* Spotify Modal */
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);

  const [isMobile, setIsMobile] = useState();

  const ref = useRef(null);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, [setIsMobile]);

  useEffect(() => {
    ref.current.parentElement.style.overflow = 'auto';
  }, [ref.current]);

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

  /* Confirmação de casamento */
  const [showConfirmacaoModal, setShowConfirmacaoModal] = useState(false);

  const handleOpenConfirmacaoModal = useCallback(() => {
    setShowConfirmacaoModal(true);
  }, []);

  const handleCloseConfirmacaoModal = useCallback(() => {
    setShowConfirmacaoModal(false);
  }, []);

  const inputArr = [
    {
      type: 'text',
      id: 1,
      value: '',
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: 'text',
          value: '',
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  /* Github */
  const openGithub = function () {
    window.open('https://github.com/henriquespecian/casamento-nextjs');
  };

  return (
    <ThemeProvider>
      <GlobalStyle />
      <div>
        <Head>
          <title>Henrique e Monica</title>
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
                <div class="hero">
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
                  O grande dia está chegando e não poderíamos estar mais
                  animados para compartilhar com a nossa família e amigos um dos
                  dias mais especiais das nossas vidas!
                </p>
                <br />
                <p>
                  Queremos muito sua presença neste dia tão importante com muita
                  festa, amor e carinho em uma comemoração que irá nos marcar
                  para sempre!
                </p>
                <br />
                <br />
                <h2>Faltam:</h2>

                <br />
                <br />
                <h2>Endereco</h2>
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
                <br />
                <br />
                <p>Você pode fazer um pix direto pra gente</p>
                <br />
                <br />
                <a href="https://nubank.com.br/pagar/48wth/mGWKfQeR5q">
                  <img
                    className="image-center"
                    src={getImagePath('/image/qrcode-pix.png')}
                    alt="QrCode do Pix"
                    href="https://nubank.com.br/pagar/48wth/mGWKfQeR5q"
                  />
                  Pague aqui
                </a>
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

        {/* Confirmação de presença  */}
        {showConfirmacaoModal && (
          <Modal
            title="Confirmação de Presença"
            icon={<FilePin variant="32x32_4" />}
            closeModal={handleCloseConfirmacaoModal}
            menu={[
              {
                name: 'Options',
                list: (
                  <List>
                    <List.Item onClick={handleCloseConfirmacaoModal}>
                      Close
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <Fieldset legend="Nome dos presentes">
              <div>
                <label>Nome e sobrenome: </label>
                <Input
                  type="text"
                  placeholder="Nome e sobrenome"
                  required
                ></Input>
                <Button onClick={addInput}>Adicionar acompanhante</Button>
              </div>

              {arr.map((item, i) => {
                return (
                  <div>
                    <label>Nome e sobrenome: </label>
                    <Input
                      onChange={handleChange}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="40"
                    />
                  </div>
                );
              })}
            </Fieldset>

            <div className="enviarCancelar">
              <Button className="botoes">Enviar</Button>
              <Button className="botoes">Cancelar</Button>
            </div>
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
              <List.Item icon={<Packager1 variant="32x32_4" />}>
                Lista de presentes
              </List.Item>
              <List.Item
                icon={<FilePin variant="32x32_4" />}
                onClick={handleOpenConfirmacaoModal}
              >
                Confirmação de presença
              </List.Item>
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
