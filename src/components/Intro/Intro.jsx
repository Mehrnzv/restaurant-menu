import { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import meal from "../../assets/meal.mp4";
import "./intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const viRef = useRef();

  return (
    <div className="video">
      <video ref={viRef} src={meal} loop controls={false} muted />
      <div className="video_overlay">
        <div
          className="video_overlay-circle"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              viRef.current.pause();
            } else {
              viRef.current.play();
            }
          }}
        >
          { playVideo ? (
            <BsPauseFill size={30} color="#fff" />
          ) : (
            <BsFillPlayFill size={30} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
