import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import styles from "./styles.module.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { convertDurationToTimeString } from "../../utils/ConvertDurationToTimeString";

export default function Header() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const {
    episodeList,
    togglePlay,
    currentEpisodeIndex,
    isPlaying,
    toggleShuffle,
    isShuffling,
    isLooping,
    clearPlayerState,
    hasNext,
    playNext,
    toggleLoop,
    playPrevious,
  } = useContext(PlayerContext);
  const episode = episodeList[currentEpisodeIndex];

  function setUpProgressListener() {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener("timeupdate", (e) => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  return (
    <header className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>
      {episode ? (
        <div className={styles.currentEpisode}>
          <img src={episode.thumbnail} />
          <strong>{episode.title}</strong>
        </div>
      ) : (
        <div className={styles.emptyPlayer}></div>
      )}
      <footer className={episode ? styles.empty : ""}>
        <div className={styles.progress}>
          <span>{convertDurationToTimeString(progress)}</span>
          <div className={styles.slider}>
            {episode ? (
              <Slider
                trackStyle={{ backgroundColor: "#84d361" }}
                railStyle={{ backgroundColor: "#9f75ff" }}
                handleStyle={{ borderColor: "#84d361", borderWidth: 4 }}
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
              />
            ) : (
              <div className={styles.emptySlider}></div>
            )}
          </div>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </div>
      </footer>

      {episode && (
        <audio
          ref={audioRef}
          onLoadedMetadata={setUpProgressListener}
          loop={isLooping}
          src={episode.url}
          autoPlay
          onEnded={handleEpisodeEnded}
        />
      )}

      <div className={styles.buttons}>
        <button
          onClick={toggleShuffle}
          className={isShuffling ? styles.isActive : ""}
          type="button"
          disabled={!episode || episodeList.length === 1}
        >
          <img src="/shuffle.svg" alt="Embaralhar" />
        </button>
        <button onClick={playPrevious} type="button" disabled={!episode}>
          <img src="/play-previous.svg" alt="Tocar anterior" />
        </button>
        <button
          onClick={togglePlay}
          disabled={!episode}
          type="button"
          className={styles.playButton}
        >
          {isPlaying ? (
            <img src="/pause.svg" alt="Pause" />
          ) : (
            <img src="/play.svg" alt="Tocar" />
          )}
        </button>
        <button onClick={playNext} disabled={!episode} type="button">
          <img src="/play-next.svg" alt="Tocar próximo" />
        </button>
        <button
          disabled={!episode}
          type="button"
          onClick={toggleLoop}
          className={isLooping ? styles.isActive : ""}
        >
          <img src="/repeat.svg" alt="Repetir" />
        </button>
      </div>
    </header>
  );
}
