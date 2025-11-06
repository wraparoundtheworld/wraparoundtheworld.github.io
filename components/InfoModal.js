import { useState, useEffect, useRef } from "react";
import { Modal, List, Tabs, Tab, Fieldset, Checkbox } from "@react95/core";
import { InfoBubble } from "@react95/icons";
import { isMobileDevice } from "../utils/mobile";
import { TASKBAR_HEIGHT } from "../utils/constants";

export default function InfoModal({ show, onClose }) {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  useEffect(() => {
    if (ref.current != null) ref.current.parentElement.style.overflow = "auto";
  }, [ref.current, show]);

  if (!show) return null;

  return (
    <Modal
      title="Seungyong Moon"
      className="modal-info"
      icon={<InfoBubble variant="32x32_4" />}
      closeModal={onClose}
      style={{
        ...(isMobile
          ? {
              top: "60%",
              left: "5%",
              width: "90%",
              margin: 0,
            }
          : {
              top: "53%",
              left: "10%",
              width: "25%",
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
      <Tabs height="auto" defaultActiveTab="General">
        <Tab title="General">
          <p
            style={{
              marginTop: 0,
              marginBottom: "1.6em",
            }}
          >
            Seungyong's studio practice examines the unseen influence of design
            and visual media, as well as the social dynamics of standardization
            and normalization.{" "}
          </p>

          <Fieldset legend="Interests">
            <Checkbox readOnly checked id="commons" name="commons">
              Design Research
            </Checkbox>
            <Checkbox readOnly checked id="noise" name="noise">
              Noise
            </Checkbox>
            <Checkbox readOnly checked id="design" name="design">
              Decolonising Design
            </Checkbox>
            <Checkbox readOnly checked id="modernism" name="modernism">
              Graphic Design
            </Checkbox>
          </Fieldset>

          <p>
            Learn more about{" "}
            <a href="https://seungyongmoon.com/" target="_blank">
              Seungyong Moon
            </a>
          </p>
        </Tab>
        <Tab title="Profile">
          <div className="profile">
            <div className="portrait">
              <img src="/image/portrait.png" alt="Seungyong Moon" />
            </div>
            <div className="wrapintro">
              <div className="introduction">
                Seungyong Moon
                <ul>
                  <li>Creative / Art Director</li>
                  <li>Graphic Designer</li>
                  <li>Web Programmer</li>
                  <li>AI / AR / 3D Artist</li>
                </ul>
              </div>
              <div className="introduction">
                Links
                <ul>
                  <li>
                    <a href="https://seungyongmoon.com/" target="_blank">
                      Seungyong Moon
                    </a>
                  </li>
                  <li>
                    <a href="https://diamondintheback.site/" target="_blank">
                      Diamond in the Back
                    </a>
                  </li>
                  <li>
                    <a href="https://moonseungyong.github.io/" target="_blank">
                      moonseungyong.github.io
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </Modal>
  );
}
