import { memo, useEffect } from "react";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { requestLyricListAction, requestSongDetailAction } from "@/store/player/thunk";
import styles from "./style.module.css";

const Home = memo(() => {
  const dispatch = useAppDispatch();
  const { song, index, state, lyricList } = useAppSelector((state) => state.player, shallowEqual);

  useEffect(() => {
    dispatch(requestSongDetailAction(202369));
    dispatch(requestLyricListAction(202369));
  }, [dispatch]);

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <p className="index">{index}</p>
        <p className="name">{song?.name}</p>
        <div className={styles.cover}>
          <img src={song?.al.picUrl} alt="" className={styles.img} />
        </div>
        <p className="artist">{song?.ar[0].name}</p>
      </div>

      <div className="right">
        <h3>state: {state}</h3>
        <div className="lyric-list">
          {lyricList?.map((item, i) => {
            return (
              <p key={item.time} className="item">
                {item.content}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Home;
