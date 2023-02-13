import { memo, useEffect } from "react";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { requestSongDetailAction } from "@/store/player/thunk";
import { PlayerWrapped } from "./style";
import Lyric from "../lyric";

/**
 * Player
 * @author junpu
 * @date 2023-02-13 10:21
 */
const Player = memo(() => {
  const dispatch = useAppDispatch();
  const song = useAppSelector((state) => state.player.song, shallowEqual);
  console.log(`Player 渲染了: ${song}`);

  useEffect(() => {
    dispatch(requestSongDetailAction(202369));
  }, [dispatch]);

  return (
    <PlayerWrapped>
      <h2>Player</h2>
      <div className="content">
        <div className="left">
          <div className="cover">
            <img src={song?.al.picUrl} alt="" className="img" />
          </div>
          <p className="name">歌曲：{song?.name}</p>
          <p className="artist">歌手：{song?.ar[0].name}</p>
        </div>

        <Lyric />
      </div>
    </PlayerWrapped>
  );
});

export default Player;
