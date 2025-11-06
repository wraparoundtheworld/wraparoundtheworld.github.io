import { useState, useEffect, useRef } from "react";
import { Modal, List, Frame } from "@react95/core";
import { Wangimg130 } from "@react95/icons";
import { InsideModal } from "./insideModal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { isMobileDevice } from "../utils/mobile";
import { TASKBAR_HEIGHT } from "../utils/constants";

export default function GalleryModal({ show, onClose, div1Visible }) {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const overflowRef = useRef(null);

  const data = {
    pictures: Object.freeze([
      {
        id: "1",
        name: "Apocalypse-1.png",
        url: "/image/1.png",
      },
      {
        id: "2",
        name: "Brutalist Architecture-1.png",
        url: "/image/2.png",
      },
      {
        id: "3",
        name: "Lost.png",
        url: "/image/3.png",
      },
      {
        id: "4",
        name: "Nomad-1.png",
        url: "/image/4.png",
      },
      {
        id: "5",
        name: "Brutalist Architecture-2.png",
        url: "/image/5.png",
      },
      {
        id: "6",
        name: "Apocalypse-2.png",
        url: "/image/6.png",
      },
      {
        id: "7",
        name: "Nomad-2.png",
        url: "/image/7.png",
      },
      {
        id: "8",
        name: "Nomad-3.png",
        url: "/image/8.png",
      },
      {
        id: "9",
        name: "Dither.jpg",
        url: "/image/9.jpg",
      },
      {
        id: "10",
        name: "Nomad-4.png",
        url: "/image/10.png",
      },
      {
        id: "11",
        name: "Nomad-5.png",
        url: "/image/11.png",
      },
      {
        id: "12",
        name: "Nomad-6.png",
        url: "/image/12.png",
      },
      {
        id: "13",
        name: "Nomad-7.png",
        url: "/image/13.png",
      },
      {
        id: "14",
        name: "Nomad-8.png",
        url: "/image/14.png",
      },
      {
        id: "15",
        name: "Dystopia.png",
        url: "/image/15.png",
      },
      {
        id: "16",
        name: "Nomad-9.png",
        url: "/image/16.png",
      },
      {
        id: "17",
        name: "Dystopia-2.png",
        url: "/image/17.png",
      },
    ]),
  };

  const [selectedPicture, setSelectedPicture] = useState(
    data.pictures[Math.floor(Math.random() * data.pictures.length)].url
  );

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  const handlePictureClick = (pictureUrl) => {
    setSelectedPicture(pictureUrl);
  };

  if (!show || !div1Visible) return null;

  return (
    <Modal
      title="Gallery.exe"
      className="modal-gallery"
      icon={<Wangimg130 variant="32x32_4" />}
      closeModal={onClose}
      style={{
        ...(isMobile
          ? {
              top: "33%",
              left: "5%",
              height: "auto",
              maxheight: `calc(33% - ${TASKBAR_HEIGHT}px)`,
              width: "90%",
              margin: 0,
            }
          : {
              top: "35%",
              left: "27%",
              width: "33%",
              maxheight: `calc(33% - ${TASKBAR_HEIGHT}px)`,
            }),
      }}
      menu={[
        {
          name: "File",
          list: (
            <List>
              <List.Item onClick={onClose}>Exit</List.Item>
            </List>
          ),
        },
      ]}
    >
      <div className="pictures">
        <Frame
          boxShadow="none"
          style={{
            ...(isMobile
              ? {
                  height: "230px",
                }
              : {
                  height: "37vh",
                }),
          }}
        >
          <InsideModal
            bg="white"
            boxShadow="out"
            ref={overflowRef}
            style={{
              padding: "10px",
            }}
          >
            <div className="picname">
              {data.pictures.map((picture) => (
                <span
                  key={picture.id}
                  name={picture.name}
                  onClick={() => handlePictureClick(picture.url)}
                  className={selectedPicture === picture.url ? "active" : ""}
                >
                  {picture.name}
                </span>
              ))}
            </div>
          </InsideModal>
        </Frame>
        <Frame
          boxShadow="none"
          style={{
            ...(isMobile
              ? {
                  height: "230px",
                }
              : {
                  height: "37vh",
                }),
          }}
        >
          <InsideModal
            boxShadow="out"
            ref={ref}
            style={{
              padding: "10px",
            }}
          >
            <Zoom>
              <img src={selectedPicture} alt="Selected Picture" />
            </Zoom>
          </InsideModal>
        </Frame>
      </div>
    </Modal>
  );
}
