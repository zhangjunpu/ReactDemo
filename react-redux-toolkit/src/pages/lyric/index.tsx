import React, { memo, useEffect } from "react";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { requestLyricListAction } from "@/store/player/thunk";
import { getLyricListSelector } from "@/store/player";
import { LyricWrapped } from "./style";

/**
 * 歌词
 * @author junpu
 * @date 2023-02-13 10:21
 */

const Lyric = memo(() => {
  const dispatch = useAppDispatch();
  const lyricList = useAppSelector(getLyricListSelector, shallowEqual);
  const state = useAppSelector((state) => state.player.state);
  const error = useAppSelector((state) => state.player.error);
  console.log(`Lyric 渲染了: ${state}, ${error}, ${lyricList?.length}`);

  useEffect(() => {
    if (state === "idle") {
      dispatch(requestLyricListAction(202369));
    }
  }, [dispatch, state]);

  return (
    <LyricWrapped>
      <h3>
        歌词: {state}, error: {error}
      </h3>
      <div className="lyric-list">
        {lyricList?.map((item, i) => {
          return (
            <p key={item.time} className="item">
              {item.content}
            </p>
          );
        })}
      </div>
    </LyricWrapped>
  );
});

export default Lyric;
