import { useState, useEffect, useRef } from "react";
import { Modal, List } from "@react95/core";
import { FileText } from "@react95/icons";
import { InsideModal } from "./insideModal";
import { isMobileDevice } from "../utils/mobile";
import { TASKBAR_HEIGHT } from "../utils/constants";

export default function ResearchModal({ show, onClose }) {
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
      className={!isMobile ? "modal" : ""}
      title="Research Material"
      closeModal={onClose}
      icon={<FileText variant="32x32_4" />}
      style={{
        ...(isMobile
          ? {
              top: "2%",
              left: "5%",
              height: `calc(40% - ${TASKBAR_HEIGHT}px)`,
              width: "90%",
              margin: 0,
            }
          : {
              top: "3%",
              left: "5%",
              width: "45%",
              height: "50vh",
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
      <InsideModal bg="white" boxShadow="out" ref={ref}>
        <div>
          <img className="image-hero" src={"/image/hero.webp"} alt="Noise" />
          <div className="hero"></div>
          <br />
          <h2>A Defense of Noise</h2>

          <p>
            In Korea, particularly, the style known as "Newtro" has gained
            popularity alongside the retro trend. This style consists of
            low-quality videos resembling VHS tapes and images with glitch
            effects, all based on noise. Such videos and images are widely
            shared on the internet. Even in the field of design, graphic
            designers often apply noise effects such as textures to posters,
            giving them a vintage feel.
          </p>
          <br />
          <img
            className="image-center"
            src={"/image/vhs.jpg"}
            alt="New Jeans"
          />
          <br />
          <p>
            Hito Steyerl, in her work "In Defense of the Poor Image," presents
            the potential of low-resolution and compressed images. She
            emphasizes that the imperfections and distortions of these images
            can challenge conventional visual representations and authority.
            Although these images lose their original aura as they lose their
            original source and become distorted, they can be perceived more
            democratically.
          </p>
          <br />
          <img
            className="icons"
            src={"/image/poorimage.jpg"}
            alt="Thomas Ruff, jpeg rl104, 2007"
          />
          <br />
          <p>
            Another work, "Proxy Politics: Signal and Noise," addresses the
            interest in noise reduction in smartphone photography due to
            low-quality lenses. The algorithm used in this context analyzes the
            user-captured image, removes noise, and smoothes the photo. However,
            there is a drawback in that developers of such algorithms can
            manipulate the user's perception by distorting the intended reality
            of the image or creating unwanted results.
          </p>
          <br />
          <img
            className="icons"
            src={"/image/cp.png"}
            alt="Computational Photography"
          />
          <br />
          <p>
            Even with the advancements of AI and smartphones providing smoother
            images, why do we still have an obsession with noisy images? Mark
            Fisher, in "Ghosts of My Life," suggests that our current anxieties
            reveal a desire to linger in the past. Consequently, instead of
            creating something new, we reinterpret the guaranteed elements and
            remain in the past.
          </p>
          <br />
          <img
            className="image-center"
            src={"/image/mark.jpeg"}
            alt="Mark Fisher, 1968 – 2017"
          />
          <br />
          <p>
            Noisy, low-quality images possess a visual neutrality. They can be
            seen as an alternative language that breaks away from traditional
            patterns, or as a reflection of our desire to escape the
            overwhelming fears of the present by lingering in the past.
          </p>
          <br />
          <br />
        </div>
      </InsideModal>
    </Modal>
  );
}
